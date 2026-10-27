"use client";

import { PostEntry } from "@/lib/posts";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChevronDown,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer({ posts }: { posts: PostEntry[] }) {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear} - ${currentYear}`;
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "English", region: "Global", short: "EN" },
  ];

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;

    const normalizedPath = pathname.replace(
      /^\/(en|fil|cmn|es|hi)(?=\/|$)/,
      "",
    );
    const nextPath = `/${nextLocale}${normalizedPath || "/"}`;
    // replace and refresh to ensure the new locale is applied immediately
    router.replace(nextPath);
    router.refresh();
  };

  const navigation = [
    { href: "/about", label: "About" },
    { href: "/members", label: "Members" },
    { href: "/projects", label: "Projects" },
    { href: "/community", label: "Community" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  const resources = [
    { href: "/community-guidelines", label: "Community Guidelines" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/rss.xml", label: "RSS Feed" },
  ];

  const socials = [
    { href: "https://github.com/hallofcodes", label: "GitHub", icon: faGithub },
    {
      href: "https://facebook.com/hallofcodes",
      label: "Facebook",
      icon: faFacebook,
    },
    {
      href: "https://youtube.com/@hallofcodes",
      label: "YouTube",
      icon: faYoutube,
    },
    {
      href: "https://linkedin.com/company/hallofcodes",
      label: "LinkedIn",
      icon: faLinkedin,
    },
  ];

  const sponsors = [
    {
      name: "ExcelinWeb",
      href: "https://excelinweb.com/?utm_source=hallofcodes&utm_medium=referral&utm_campaign=sponsorship",
      logo: "https://excelinweb.com/assets/images/logo/excelinweb-logo-white-transparent.png",
    },
    {
      name: "AISkillHub.dev",
      href: "https://aiskillhub.dev/?utm_source=hallofcodes&utm_medium=referral&utm_campaign=sponsorship",
      logo: "https://aiskillhub.dev/android-chrome-192x192.png",
    },
  ];

  const columnHeading = "mb-4 text-sm font-semibold text-white";
  const columnLink =
    "group flex items-center gap-3 py-1.5 text-sm text-gray-400 transition hover:text-cyan-200";

  return (
    <footer className="bg-[#090d16] px-3 pb-3 pt-16 sm:px-5 sm:pb-5">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#080d16]">
        <div className="flex flex-col gap-4 border-b border-white/10 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
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
                loading="lazy"
                className="size-8 object-contain transition duration-300 group-hover:scale-105"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-white sm:text-base">
                Hall of Codes
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-gray-500">
                Build together
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center border border-white/15 text-gray-300 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr]">
          <div className="bg-[#080d16] p-6">
            <p className="max-w-xs text-sm leading-7 text-gray-400">
              We pave the way for seamless collaboration, ensuring projects
              thrive in an environment of unity and progress.
            </p>
            <a
              href="https://github.com/hallofcodes/join"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} />
              Join the organization
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[10px] text-gray-500"
              />
            </a>
          </div>

          <nav aria-label="Footer navigation" className="bg-[#080d16] p-6">
            <h2 className={columnHeading}>Navigate</h2>
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} className={columnLink}>
                    <span className="font-mono text-[10px] text-gray-600 group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-[#080d16] p-6">
            <h2 className={columnHeading}>Recent posts</h2>
            {posts.length > 0 ? (
              <ul>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={columnLink}
                      title={post.title}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="shrink-0 text-[10px] text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
                      />
                      <span className="line-clamp-1">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No recent posts.</p>
            )}
          </div>

          <div className="flex flex-col gap-8 bg-[#080d16] p-6">
            <div>
              <h2 className={columnHeading}>Resources</h2>
              <ul>
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={columnLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <label
                htmlFor="footer-language"
                className={columnHeading + " block"}
              >
                Language / Region
              </label>
              <div className="relative">
                <select
                  id="footer-language"
                  value={locale}
                  onChange={(e) => handleLocaleChange(e.target.value)}
                  className="w-full appearance-none border border-white/15 bg-transparent px-3 py-2 pr-9 text-sm text-gray-200 transition hover:border-cyan-300/60 focus:border-cyan-300 focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option
                      key={lang.code}
                      value={lang.code}
                      className="bg-[#080d16]"
                    >
                      {lang.label} ({lang.region})
                    </option>
                  ))}
                </select>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="footer-sponsors"
          className="border-t border-white/10 px-6 py-6 sm:px-8"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2
              id="footer-sponsors"
              className="text-sm font-semibold text-white"
            >
              Sponsors & Partners
            </h2>
            <span className="text-xs text-gray-500">
              Thank you for your support
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sponsor.name}
                className="group inline-flex items-center gap-3 border border-white/10 px-4 py-3 transition hover:border-cyan-300/40 hover:bg-white/[0.03]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sponsor.logo}
                  alt=""
                  loading="lazy"
                  className="size-7 object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                />

                <span className="text-sm font-medium text-gray-300 transition group-hover:text-white">
                  {sponsor.name}
                </span>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[10px] text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
                />
              </a>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {yearText}{" "}
            <Link
              href="/"
              className="text-gray-300 transition hover:text-white"
            >
              Hall of Codes
            </Link>
            . All rights reserved.
          </span>

          <a
            href="https://github.com/hallofcodes/hallofcodes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono transition hover:text-cyan-200"
          >
            <FontAwesomeIcon icon={faCodeBranch} />
            This site is open source
          </a>
        </div>
      </div>
    </footer>
  );
}
