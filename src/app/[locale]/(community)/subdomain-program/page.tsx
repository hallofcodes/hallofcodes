import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subdomain Program - Hall of Codes",
  description:
    "Learn about the Subdomain Program offered by Hall of Codes, providing free subdomains for approved community members to host their projects and portfolios.",
  alternates: {
    canonical: "https://www.hallofcodes.org/subdomain-program",
  },
  openGraph: {
    title: "Subdomain Program - Hall of Codes",
    description:
      "Learn about the Subdomain Program offered by Hall of Codes, providing free subdomains for approved community members to host their projects and portfolios.",
    url: "https://www.hallofcodes.org/subdomain-program",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://www.hallofcodes.org/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subdomain Program - Hall of Codes",
    description:
      "Learn about the Subdomain Program offered by Hall of Codes, providing free subdomains for approved community members to host their projects and portfolios.",
    images: [
      {
        url: "https://www.hallofcodes.org/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
};

export default function SubdomainProgram() {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">Subdomain Program</h1>
      <div className="text-gray-400 mb-3">
        Hall of Codes (“HOC”, “we”, “our”) provides free subdomains under
        hallofcodes.org (e.g., your-project.hallofcodes.org) to approved
        community members for personal, educational, or open-source projects.
      </div>
      <p className="text-gray-400 mb-12">
        This service is provided as-is and may be modified or discontinued at
        any time.
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Eligibility Requirements</h3>
          <p className="text-gray-500">
            To request and maintain a subdomain, you must:
          </p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>
              Be a member of the Hall of Codes community for at least 30
              consecutive days
            </li>
            <li>Maintain an active account on GitHub or Codeberg</li>
            <li>
              Be a member of at least one official HOC communication channel:
              <ul className="list-disc list-inside text-gray-500 mt-1 space-y-1 ml-6">
                <li>Facebook Messenger group, or</li>
                <li>WhatsApp group</li>
              </ul>
            </li>
            <li>
              Maintain a positive standing in the community (no bans or serious
              violations)
            </li>
          </ul>

          <p className="text-gray-500 mt-4">
            We reserve the right to verify eligibility before approval.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Subdomain Allocation Rules</h3>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Subdomains are issued on a first-come, first-approved basis</li>
            <li>
              Each member may request a reasonable number of subdomains
              (fair-use applies)
            </li>
            <li>
              Subdomain format must follow:
              <ul className="list-disc list-inside text-gray-500 mt-1 ml-6">
                <li>project-name.hallofcodes.org, or</li>
                <li>your-name.hallofcodes.org</li>
              </ul>
            </li>
            <li>
              Names must:
              <ul className="list-disc list-inside text-gray-500 mt-1 ml-6">
                <li>Be lowercase</li>
                <li>Use only letters, numbers, and hyphens</li>
                <li>Not impersonate brands, organizations, or individuals</li>
                <li>
                  Not be misleading, scam, spam, offensive or violate any laws
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Allowed Usage</h3>
          <p className="text-gray-500">Subdomains may be used for:</p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Personal projects, portfolios, or blogs</li>
            <li>Educational resources, tutorials, or demos</li>
            <li>Open-source projects</li>
            <li>Developer tools and experiments</li>
            <li>Community or hobby projects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Prohibited Usage</h3>
          <p className="text-gray-500">You may NOT use your subdomain for:</p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>
              Illegal activities under Philippine law or international law
            </li>
            <li>Phishing, scams, fraud, or impersonation</li>
            <li>Malware distribution, hacking tools, or malicious services</li>
            <li>Hosting copyrighted content without permission</li>
            <li>Spam, botnets, or abusive automation</li>
            <li>Adult content, explicit material, or NSFW services</li>
            <li>Cryptocurrency scams or deceptive financial schemes</li>
            <li>
              Activities that damage Hall of Codes infrastructure or reputation
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Security & Responsibility</h3>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>
              You are fully responsible for all content hosted on your subdomain
            </li>
            <li>
              You must secure your own code, applications, and credentials
            </li>
            <li>
              Hall of Codes is not liable for:
              <ul className="list-disc list-inside text-gray-500 mt-1 space-y-1 ml-6">
                <li>
                  Data breaches, hacks, or security incidents on your subdomain
                </li>
                <li>Legal issues arising from your content or activities</li>
                <li>Downtime, performance issues, or technical problems</li>
                <li>Actions taken by subdomain users</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Monitoring & Enforcement</h3>
          <p className="text-gray-500">We reserve the right to:</p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Review subdomain usage at any time</li>
            <li>
              Suspend or remove subdomains without prior notice in case of
              violations
            </li>
            <li>Request modifications to ensure compliance</li>
            <li>Revoke access if community rules are violated</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">No Liability</h3>
          <p className="text-gray-500">
            Advice, consultations, or answers shared in this community are for
            informational purposes only. Hall of Codes members and admins are
            not responsible for any outcomes resulting from the use of shared
            information.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Suspension & Revocation</h3>
          <p className="text-gray-500">
            Your subdomain may be suspended or removed if:
          </p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1 ml-6">
            <li>You violate these terms</li>
            <li>You become inactive in the community for a long period</li>
            <li>You misuse the service or harm the ecosystem</li>
            <li>You request deletion</li>
          </ul>
          <p className="text-gray-500 mt-4">
            In most cases, we may issue a warning first, but severe violations
            may result in immediate removal.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Changes to Service</h3>
          <p className="text-gray-500">Hall of Codes may:</p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1 ml-6">
            <li>Modify these terms at any time</li>
            <li>Change subdomain structure or availability</li>
            <li>Add limits or requirements</li>
            <li>Discontinue the service entirely</li>
          </ul>
          <p className="text-gray-500 mt-4">
            Continued use means acceptance of updated terms.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">No Ownership Guarantee</h3>
          <p className="text-gray-500">Subdomains are:</p>
          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Provided as a privilege, not ownership</li>
            <li>Not transferable or sellable</li>
            <li>Always under control of Hall of Codes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-500">
            All requests, issues, or appeals should be submitted through
            official HOC community channels (Messenger or WhatsApp group) or
            GitHub/Codeberg discussions.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-400">
        By requesting and using a subdomain, you agree to these terms and
        conditions. Please read them carefully and reach out if you have any
        questions.
      </p>
    </div>
  );
}
