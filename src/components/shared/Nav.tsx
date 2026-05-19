"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const nearTop = currentY < 10;

      if (scrollingDown && !nearTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-30 w-full border-b border-gray-800/50 bg-gray-900/70 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/hoc-icon.png"
              alt="Hall of Codes Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <div className="text-lg font-semibold text-white">
                Hall of Codes
              </div>
              <div className="text-xs text-gray-400">
                Merging Programmers Beyond Conflicts
              </div>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-400"
            >
              Members
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-400"
            >
              Community
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-400"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-blue-400"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800"
            >
              {open ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2">
          <Link
            href="/members"
            className="block py-2 px-3 rounded hover:bg-gray-800 text-gray-200"
            onClick={() => setOpen(false)}
          >
            Members
          </Link>
          <Link
            href="/projects"
            className="block py-2 px-3 rounded hover:bg-gray-800 text-gray-200"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/community"
            className="block py-2 px-3 rounded hover:bg-gray-800 text-gray-200"
            onClick={() => setOpen(false)}
          >
            Community
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-3 rounded hover:bg-gray-800 text-gray-200"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
