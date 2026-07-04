"use client";

import createGlobe from "cobe";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useRef } from "react";
import type { Member } from "@/lib/github/members";

type MemberGlobeProps = {
  members: Member[];
};

type AnchorStyle = CSSProperties & {
  positionAnchor: string;
};

export default function MemberGlobe({ members }: MemberGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const locationFromLogin = (login: string): [number, number] => {
    let hash = 0;

    for (let index = 0; index < login.length; index++) {
      hash = (hash * 31 + login.charCodeAt(index)) >>> 0;
    }

    const latitude = (hash % 12000) / 100 - 60;
    const longitude = ((hash >>> 8) % 36000) / 100 - 180;

    return [latitude, longitude];
  };

  const visibleMembers = useMemo(
    () =>
      members.slice(0, 24).map((member, index) => ({
        ...member,
        id: `member-${index}-${member.login.toLowerCase()}`,
        location: locationFromLogin(member.login),
      })),
    [members],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    let size = Math.max(container.clientWidth, 1);

    let phi = 0;
    let targetPhi = 0;
    let theta = 0.18;
    let targetTheta = 0.18;
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let animationFrame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: pixelRatio,
      width: size * pixelRatio,
      height: size * pixelRatio,
      phi,
      theta,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 18000,
      mapBrightness: 4,
      mapBaseBrightness: 0.05,
      baseColor: [0.08, 0.15, 0.28],
      markerColor: [0.23, 0.51, 0.96],
      glowColor: [0.12, 0.3, 0.65],
      markerElevation: 0.04,
      markers: visibleMembers.map((member) => ({
        id: member.id,
        location: member.location,
        size: 0.045,
      })),
    });

    const animate = () => {
      if (pointerX === null) {
        targetPhi += 0.0025;
      }

      phi += (targetPhi - phi) * 0.08;
      theta += (targetTheta - theta) * 0.08;

      globe.update({ phi, theta });
      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerDown = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (pointerX === null || pointerY === null) return;

      targetPhi += (event.clientX - pointerX) / 180;
      targetTheta = Math.max(
        -0.7,
        Math.min(0.7, targetTheta + (event.clientY - pointerY) / 300),
      );

      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const handlePointerUp = (event: PointerEvent) => {
      pointerX = null;
      pointerY = null;
      canvas.releasePointerCapture(event.pointerId);
      canvas.style.cursor = "grab";
    };

    const handleScroll = () => {
      targetPhi += window.scrollY * 0.000002;
    };

    const observer = new ResizeObserver(([entry]) => {
      size = Math.max(entry.contentRect.width, 1);

      globe.update({
        width: size * pixelRatio,
        height: size * pixelRatio,
      });
    });

    canvas.style.cursor = "grab";
    canvas.style.touchAction = "pan-y";

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("scroll", handleScroll, { passive: true });

    observer.observe(container);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();

      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("scroll", handleScroll);

      globe.destroy();
    };
  }, [visibleMembers]);

  return (
    <div className="absolute right-8 top-1/2 hidden w-[min(42vw,560px)] -translate-y-1/2 lg:block xl:right-16 2xl:right-28">
      <div
        ref={containerRef}
        className="relative aspect-square w-full"
        aria-label="Hall of Codes GitHub members around the world"
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab opacity-90 active:cursor-grabbing"
          style={{
            contain: "layout paint size",
            touchAction: "pan-y",
          }}
        />

        {visibleMembers.map((member) => (
          <Link
            key={member.id}
            href={`https://github.com/${member.login}`}
            target="_blank"
            rel="noreferrer"
            title={`@${member.login}`}
            className="group absolute z-10 transition-[opacity,filter,scale] duration-300"
            style={
              {
                positionAnchor: `--cobe-${member.id}`,
                bottom: "anchor(center)",
                left: "anchor(center)",
                translate: "-50% 50%",
                opacity: `var(--cobe-visible-${member.id}, 0)`,
                filter: `blur(calc((1 - var(--cobe-visible-${member.id}, 0)) * 5px))`,
                scale:
                  "calc(.75 + var(--cobe-visible-" + member.id + ", 0) * .25)",
              } as AnchorStyle
            }
          >
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/75 p-1.5 pr-3 shadow-xl backdrop-blur-md group-hover:border-blue-400/70">
              <Image
                src={member.avatar}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-2 ring-blue-400/60"
              />

              <span className="max-w-28 truncate text-xs font-medium text-white">
                @{member.login}
              </span>
            </span>
          </Link>
        ))}

        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-gray-300 backdrop-blur">
          {members.length}+ GitHub members worldwide
        </div>
      </div>
    </div>
  );
}
