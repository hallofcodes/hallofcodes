import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Hall of Codes",
  description:
    "Terms of Service for Hall of Codes community site. Rules for acceptable use, contributions, and limitations of liability.",
  alternates: { canonical: "https://www.hallofcodes.org/terms-of-service" },
  openGraph: {
    title: "Terms of Service - Hall of Codes",
    description:
      "Terms of Service for Hall of Codes community site. Rules for acceptable use, contributions, and limitations of liability.",
    url: "https://www.hallofcodes.org/terms-of-service",
    siteName: "Hall of Codes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Hall of Codes",
    description:
      "Terms of Service for Hall of Codes community site. Rules for acceptable use, contributions, and limitations of liability.",
  },
};

export default function TermsOfService() {
  const effectiveDate = "2026-05-04";

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Terms of Service
      </h1>

      <p className="text-gray-400 mb-6">
        Effective date: {effectiveDate}
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Acceptance of terms</h2>
        <p className="text-gray-300">
          By using the Hall of Codes website (the "Service"), you agree to be
          bound by these Terms of Service ("Terms"). If you do not agree to
          these Terms, please do not use the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Scope of the Service</h2>
        <p className="text-gray-300">
          Hall of Codes is an inclusion-focused community site centered around
          open-source software projects and a community blog. The Service
          provides a platform for programmers to collaborate, share knowledge,
          and contribute to projects. The Service is provided for informational
          and collaborative purposes and does not include user accounts or
          personalized features.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Acceptable use</h2>
        <p className="text-gray-300">You agree not to:</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Use the Service for illegal purposes or in violation of laws.</li>
          <li>
            Harass, threaten, defame, or otherwise engage in abusive conduct
            toward community members.
          </li>
          <li>
            Attempt to circumvent security measures, scrape non-public data, or
            interfere with the operation of the Service.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Contributions and blog posts
        </h2>
        <p className="text-gray-300">
          Community members may contribute content (for example blog posts)
          through the project's contribution process. Contributors should only
          submit content they own or have the right to publish. Contributions
          are public once merged and visible on the Service.
        </p>
        <p className="text-gray-300">
          By submitting content to the project's repository or otherwise
          providing content for publication, you represent and warrant that you
          have all rights necessary to grant the repository and the Service the
          right to host, display, and distribute that content. The repository's
          contribution guidelines and any repository-level license govern the
          license under which your contribution is distributed; please review
          those materials before submitting content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Community guidelines and moderation
        </h2>
        <p className="text-gray-300">
          All interactions, including actions in group chats, blog posts, and
          public identifiers (user names), are subject to the Hall of Codes
          Community Guidelines. Violations may result in content removal,
          warnings, temporary suspension, or bans. Moderation decisions are made
          by the project's maintainers and admins.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Third-party services</h2>
        <p className="text-gray-300">
          The Service relies on third-party platforms (for example GitHub,
          Google Search Console, and Vercel). Your use of the Service may be
          subject to those third-party terms and privacy policies in addition to
          these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Disclaimer and limitation of liability
        </h2>
        <p className="text-gray-300">
          The Service is provided "as is" and "as available" without warranties
          of any kind. To the fullest extent permitted by law, Hall of Codes and
          its maintainers disclaim all warranties, express or implied, including
          fitness for a particular purpose and non-infringement.
        </p>
        <p className="text-gray-300">
          In no event will Hall of Codes, its maintainers, contributors, or
          service providers be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of
          the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Indemnification</h2>
        <p className="text-gray-300">
          You agree to indemnify and hold harmless Hall of Codes and its
          maintainers from any claim, damage, or liability arising from your
          breach of these Terms or your contributions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Termination and changes</h2>
        <p className="text-gray-300">
          We may modify or discontinue the Service (or any part) at any time. We
          may also update these Terms from time to time; continued use of the
          Service after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Governing law</h2>
        <p className="text-gray-300">
          These Terms are governed by the laws applicable to the project
          maintainers' jurisdiction, without regard to conflict-of-law
          principles. If you have legal concerns, please consult an attorney.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <p className="text-gray-300">
          For questions or requests, please open an issue on the project
          repository:
        </p>
        <p className="text-gray-300">
          https://github.com/hallofcodes/hallofcodes/issues
        </p>
      </section>
    </div>
  );
}
