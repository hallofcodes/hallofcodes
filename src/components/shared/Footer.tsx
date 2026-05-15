import { PostEntry } from "@/lib/posts";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ posts }: { posts: PostEntry[] }) {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="md:flex md:justify-between md:items-start gap-8">
          <div className="md:w-1/3">
            <div className="flex items-start gap-3">
              <Image
                src="/hoc-icon.png"
                alt="Hall of Codes"
                width={48}
                height={48}
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

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
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
                Community
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/community-guidelines"
                    className="hover:underline"
                  >
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
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            &copy; {yearText}{" "}
            <Link
              href="https://hallofcodes.vercel.app/"
              className="hover:underline"
            >
              Hall of Codes
            </Link>
            . All Rights Reserved.
          </div>

          <div className="text-sm text-gray-400">
            Built with ♥ ·{" "}
            <Link
              href="https://github.com/hallofcodes"
              className="hover:underline"
            >
              github.com/hallofcodes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
