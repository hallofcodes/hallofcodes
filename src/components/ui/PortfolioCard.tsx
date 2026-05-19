"use client";

import { PortfolioItem } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioCard({
  portfolioItem,
  index,
}: {
  portfolioItem: PortfolioItem;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      key={portfolioItem.name}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-900/60 p-5 transition hover:bg-gray-900"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={portfolioItem.img_url}
          alt={`${portfolioItem.name} portfolio preview`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {portfolioItem.name}
          </h2>
          <p className="text-xs text-blue-300">{portfolioItem.title}</p>
        </div>

        <div className="rounded-lg bg-gray-950/60 px-2 py-1 text-right">
          <div className="text-[10px] text-gray-400">
            #{String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-300 line-clamp-3">
        {portfolioItem.description}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <Link
          href={portfolioItem.link}
          target="_blank"
          className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
        >
          View Portfolio
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300"
          aria-label="Read full description"
        >
          Read more
        </button>
      </div>
      <div
        className={`absolute inset-0 z-10 rounded-2xl bg-gray-800/95 transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full w-full p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {portfolioItem.name}
              </h3>
              <p className="text-xs text-blue-300">{portfolioItem.title}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gray-900/80 px-2 py-1 text-xs text-gray-300 hover:text-white"
              aria-label="Close full description"
            >
              Close
            </button>
          </div>

          <div className="mt-4 overflow-auto text-sm text-gray-300">
            {portfolioItem.description}
          </div>
        </div>
      </div>
    </article>
  );
}
