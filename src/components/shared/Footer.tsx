"use client";

import { PostEntry } from "@/lib/posts";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <div>
            <div className="flex items-start gap-3">
              <Image
                src="/hoc-icon.png"
                alt="Hall of Codes"
                width={48}
                height={48}
                loading="lazy"
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-semibold text-white">
                  Hall of Codes
                </div>
                <div className="text-sm text-gray-400">
                  Merging Programmers Beyond Conflicts
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              We revolutionize development by fostering cohesion among teams,
              transcending conflicts to drive collective innovation. Harnessing
              the synergy of diverse talents, we pave the way for seamless
              collaboration, ensuring projects thrive in an environment of unity
              and progress.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://facebook.com/hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" aria-hidden />
              </Link>

              <Link
                href="https://youtube.com/@hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" aria-hidden />
              </Link>

              <Link
                href="https://linkedin.com/company/hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" aria-hidden />
              </Link>

              <Link
                href="https://github.com/hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" aria-hidden />
              </Link>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fa-solid fa-github fa-lg" aria-hidden />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://facebook.com/hallofcodes"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fa-brands fa-facebook fa-lg" aria-hidden />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:underline">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Recent Posts
            </h4>
            {posts.length > 0 ? (
              <ul className="space-y-2 text-gray-400">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline line-clamp-1"
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm">No recent posts.</p>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/subdomain-program" className="hover:underline">
                  Subdomain Program
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="hover:underline">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:underline">
                  Join the Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 text-white">
              Language / Region
            </h4>
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-800 bg-gray-950/40 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
                aria-label="Select language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label} · {lang.region}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            &copy; {yearText}{" "}
            <Link
              href="https://www.hallofcodes.org/"
              className="hover:underline"
            >
              Hall of Codes
            </Link>
            . All Rights Reserved.
          </div>

          <div className="text-sm text-gray-400">
            <Link
              href="https://github.com/hallofcodes"
              className="hover:underline"
            >
              This site is open source.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
