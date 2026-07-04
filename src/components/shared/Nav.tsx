"use client";

import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/members", label: "Members", index: "01" },
  { href: "/projects", label: "Projects", index: "02" },
  { href: "/community", label: "Community", index: "03" },
  { href: "/portfolio", label: "Portfolio", index: "04" },
  { href: "/blog", label: "Blog", index: "05" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const nearTop = currentY < 10;

      if (scrollingDown && !nearTop && !open) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-30 px-3 pt-3 transition-transform duration-300 sm:px-5 sm:pt-5 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#080d16]/85 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <div className="grid h-16 grid-cols-[1fr_auto] items-center px-3 sm:px-4 lg:grid-cols-[minmax(14rem,1fr)_auto_minmax(14rem,1fr)]">
          <Link
            href="/"
            aria-label="Hall of Codes home"
            className="group flex min-w-0 items-center gap-3"
          >
            <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden border border-white/15 bg-white/5">
              <Image
                src="/hoc-icon.png"
                alt=""
                width={32}
                height={32}
                className="size-8 object-contain transition duration-300 group-hover:scale-105"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-white sm:text-base">
                Hall of Codes
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-gray-500 sm:block">
                Build together
              </span>
            </span>
          </Link>

          <div className="hidden items-center lg:flex">
            {navigation.map((item) => {
              const active =
                pathname === item.href || pathname.endsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm transition ${
                    active
                      ? "text-white"
                      : "text-gray-400 hover:text-cyan-200"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-[17px] h-px transition ${
                      active ? "bg-cyan-300" : "bg-transparent"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href="https://github.com/hallofcodes"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 border border-white/15 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-white sm:inline-flex"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[10px] text-gray-500"
              />
            </a>

            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((current) => !current)}
              className="flex size-10 items-center justify-center border border-white/15 text-gray-200 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-white lg:hidden"
            >
              {open ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid sm:grid-cols-2">
            {navigation.map((item) => {
              const active =
                pathname === item.href || pathname.endsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group flex min-h-16 items-center justify-between border-b border-white/10 px-5 transition sm:border-r ${
                    active
                      ? "bg-cyan-300 text-slate-950"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`text-[10px] ${
                        active ? "text-slate-700" : "text-gray-600"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition group-hover:translate-x-1"
                  />
                </Link>
              );
            })}

            <a
              href="https://github.com/hallofcodes"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-16 items-center justify-between px-5 text-gray-300 transition hover:bg-white/5 hover:text-white sm:hidden"
            >
              <span className="flex items-center gap-4">
                <FontAwesomeIcon icon={faGithub} />
                <span className="font-medium">GitHub organization</span>
              </span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 -z-10 bg-black/45 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </nav>
  );
}
