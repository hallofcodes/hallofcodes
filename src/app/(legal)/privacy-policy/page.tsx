import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hall of Codes",
  description:
    "Privacy Policy for Hall of Codes. Explains what data (if any) we collect, how we use it, and third-party services involved.",
  alternates: { canonical: "https://www.hallofcodes.org/privacy-policy" },
  openGraph: {
    title: "Privacy Policy - Hall of Codes",
    description:
      "Privacy Policy for Hall of Codes. Explains what data (if any) we collect, how we use it, and third-party services involved.",
    url: "https://www.hallofcodes.org/privacy-policy",
    siteName: "Hall of Codes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Hall of Codes",
    description:
      "Privacy Policy for Hall of Codes. Explains what data (if any) we collect, how we use it, and third-party services involved.",
  },
};

export default function PrivacyPolicy() {
  const effectiveDate = "2026-05-04";

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Privacy Policy
      </h1>

      <p className="text-gray-400 mb-6">
        Effective date: {effectiveDate}
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">
          Hall of Codes is a community site focused on collaboration,
          open-source projects, and a community blog. This site does not provide
          user accounts (no login or registration). Below we explain what
          information we do — and do not — collect, how the site obtains certain
          public data, and which third-party services may process limited
          information on our behalf.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Information we do NOT collect
        </h2>
        <p className="text-gray-300">
          Because Hall of Codes does not offer user registration or login, we do
          not collect or store personal account data such as names, email
          addresses, passwords, or profile information through our site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Information we may process
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>
            Google Search Console: We use Google Search Console to monitor the
            site's presence in Google Search and obtain aggregate search
            performance data. This is used to improve discoverability and site
            health; we do not use it to track individual users.
          </li>
          <li>
            Vercel and Hosting Logs: The site is hosted on Vercel. Vercel may
            collect standard server logs (for example IP addresses, request user
            agent strings, and other transient request metadata) as part of
            their hosting and security operations. Those logs are processed and
            retained by Vercel according to their policies.
          </li>
          <li>
            GitHub Public Data: Member and repository lists shown on the site
            are fetched from the public data of the GitHub organization
            "hallofcodes." Only public members and public repositories are
            included. That data is cached on our side and refreshed
            approximately every 6 hours to limit rate use and improve
            performance.
          </li>
          <li>
            Public Contributions: Blog posts and other content published to the
            site come from the project's content repository (via pull requests
            or merges). Once published, those posts are publicly visible and
            served by the site.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Cookies and client-side storage
        </h2>
        <p className="text-gray-300">
          The core site does not set proprietary tracking cookies. Third-party
          services (for example Google or Vercel) may set or access cookies or
          local storage as described in their own policies. If you encounter any
          embedded third-party widgets or links, those providers may operate
          separately and have their own cookies and tracking mechanisms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">How we use information</h2>
        <p className="text-gray-300">
          We use the limited information described above to:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Maintain and operate the site</li>
          <li>
            Improve discoverability and search presence via Google Search
            Console
          </li>
          <li>
            Display public organization data (members and repos) fetched from
            GitHub
          </li>
          <li>
            Publish community-contributed content (blog posts and similar)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Third-party services and links
        </h2>
        <p className="text-gray-300">
          The site integrates third-party services (notably Google Search
          Console and Vercel hosting) and fetches public data from GitHub. These
          third parties have their own privacy policies and practices. We
          encourage you to review:
        </p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Google: https://policies.google.com/privacy</li>
          <li>Vercel: https://vercel.com/legal/privacy-policy</li>
          <li>
            GitHub:
            https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          User contributions & public posting
        </h2>
        <p className="text-gray-300">
          If you contribute content (for example by submitting a blog post via
          the repository), that content becomes part of the public site and may
          be visible to anyone. Contributors should only submit content they
          have the right to publish and must follow the project's contribution
          guidelines. AI-assisted content should be disclosed as described in
          the contributor guidance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Community guidelines and moderation
        </h2>
        <p className="text-gray-300">
          Hall of Codes members and contributors are expected to follow our
          Community Guidelines. Actions in group chats, blog posts, user names,
          and other public contributions are subject to those guidelines and
          enforcement (including warnings, content removal, or bans).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Data retention and deletion
        </h2>
        <p className="text-gray-300">
          Public data fetched from GitHub is refreshed on a cache schedule
          (approximately every 6 hours) so the site reflects changes on GitHub.
          If you wish to remove or correct information that appears on this site
          and you control the underlying GitHub resource, update or remove it on
          GitHub and the site cache will refresh. For any other removal
          requests, open an issue in the repository (see contact below).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Security</h2>
        <p className="text-gray-300">
          We take reasonable measures to protect site operations and public
          content. However, no online service can guarantee absolute security.
          Hosting provider logs (for example from Vercel) are controlled by the
          provider and subject to their security practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Children</h2>
        <p className="text-gray-300">
          Hall of Codes is not intended for young children. We do not knowingly
          collect information from children under 13. If you believe we have
          content that involves the personal information of a child under 13,
          please contact us (see below).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Changes to this policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. When changes are
          significant, we will post an updated effective date here.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <p className="text-gray-300">
          If you have questions or requests about this policy, please open an
          issue in the project repository:
        </p>
        <p className="text-gray-300">
          https://github.com/hallofcodes/hallofcodes/issues
        </p>
      </section>
    </div>
  );
}
