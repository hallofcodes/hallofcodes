import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publish Your Open Source Browser Extension - Hall of Codes",
  description:
    "Publish your open source browser extension through the Hall of Codes Chrome Web Store Developer Account.",
  alternates: {
    canonical: "https://www.hallofcodes.org/publish-to-chrome-web-store",
  },
  openGraph: {
    title: "Publish Your Open Source Browser Extension - Hall of Codes",
    description:
      "Publish your open source browser extension through the Hall of Codes Chrome Web Store Developer Account.",
    url: "https://www.hallofcodes.org/publish-to-chrome-web-store",
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
    title: "Publish Your Open Source Browser Extension - Hall of Codes",
    description:
      "Publish your open source browser extension through the Hall of Codes Chrome Web Store Developer Account.",
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

export default function PublishToChromeWebStore() {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Publish Your Open Source Browser Extension
      </h1>

      <div className="text-gray-400 mb-3">
        Hall of Codes ("HOC", "we", "our") provides approved community members
        access to our Chrome Web Store Developer Account to publish open-source
        browser extensions.
      </div>

      <p className="text-gray-400 mb-12">
        This community service helps developers distribute useful browser
        extensions without requiring every contributor to purchase their own
        Chrome Web Store developer registration. This service is provided as-is
        and may be modified or discontinued at any time.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Eligibility Requirements</h3>

          <p className="text-gray-500">
            To request publication of your browser extension, you must:
          </p>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>
              Be a member of the Hall of Codes community for at least 30
              consecutive days
            </li>
            <li>Maintain an active GitHub or Codeberg account</li>
            <li>Have your extension source code publicly available</li>
            <li>Use an approved open-source license</li>
            <li>
              Be a member of at least one official Hall of Codes communication
              channel (Messenger or WhatsApp)
            </li>
            <li>
              Maintain a positive standing within the Hall of Codes community
            </li>
          </ul>

          <p className="text-gray-500 mt-4">
            We reserve the right to verify eligibility before approving any
            publication request.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Extension Requirements</h3>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>The project must be open source.</li>
            <li>The complete source code must be publicly accessible.</li>
            <li>The extension must comply with Chrome Web Store policies.</li>
            <li>
              The extension must accurately disclose all requested permissions.
            </li>
            <li>
              The extension must not contain hidden, misleading, or malicious
              functionality.
            </li>
            <li>
              A README or documentation explaining the project is required.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Accepted Projects</h3>

          <p className="text-gray-500">We generally accept projects such as:</p>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Developer tools</li>
            <li>Productivity extensions</li>
            <li>Accessibility tools</li>
            <li>Educational projects</li>
            <li>Privacy-focused extensions</li>
            <li>Community and hobby projects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Prohibited Content</h3>

          <p className="text-gray-500">We will not publish extensions that:</p>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Contain malware or malicious code</li>
            <li>Collect user information without proper disclosure</li>
            <li>Perform phishing, scams, or impersonation</li>
            <li>Violate Chrome Web Store policies</li>
            <li>Distribute copyrighted content without permission</li>
            <li>Promote illegal activities</li>
            <li>Contain hateful, abusive, or explicit content</li>
            <li>Are intended to deceive or mislead users</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Review Process</h3>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Submit your GitHub or Codeberg repository.</li>
            <li>Hall of Codes reviews your project.</li>
            <li>We may request modifications before publication.</li>
            <li>
              Once approved, we publish the extension through the Hall of Codes
              Chrome Web Store Developer Account.
            </li>
            <li>
              Future updates may also be submitted through Hall of Codes for
              review and publication.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Ownership & Responsibilities
          </h3>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>You retain ownership of your source code.</li>
            <li>You remain responsible for maintaining your project.</li>
            <li>
              You are responsible for complying with all applicable laws and
              Chrome Web Store policies.
            </li>
            <li>
              Publishing through the Hall of Codes account does not transfer
              ownership of your project.
            </li>
            <li>
              The Chrome Web Store listing itself is managed under the Hall of
              Codes developer account.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Updates</h3>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>Project maintainers may request updates at any time.</li>
            <li>Updates are reviewed before publication.</li>
            <li>Security fixes will be prioritized whenever possible.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Suspension & Removal</h3>

          <p className="text-gray-500">
            Hall of Codes may suspend or remove an extension if:
          </p>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>The extension violates Chrome Web Store policies.</li>
            <li>The extension becomes malicious or deceptive.</li>
            <li>The project is abandoned and poses security risks.</li>
            <li>The author requests removal.</li>
            <li>Google requires its removal.</li>
            <li>The project damages the reputation of Hall of Codes.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Disclaimer</h3>

          <p className="text-gray-500">
            Hall of Codes provides publication as a free community service. We
            do not guarantee approval by Google, publication timelines,
            continued availability, download counts, or ongoing maintenance of
            any extension.
          </p>

          <p className="text-gray-500 mt-4">
            Hall of Codes is not liable for any legal claims, security issues,
            data loss, policy violations, or damages arising from your
            extension.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Changes to this Service</h3>

          <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
            <li>We may modify these terms at any time.</li>
            <li>We may change publication requirements.</li>
            <li>We may discontinue this service without notice.</li>
          </ul>

          <p className="text-gray-500 mt-4">
            Continued participation indicates acceptance of the latest version
            of these terms.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <p className="text-gray-500">
            Publication requests, extension updates, support requests, or
            appeals should be submitted through the official Hall of Codes
            communication channels or through GitHub/Codeberg.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-400">
        By requesting publication through the Hall of Codes Chrome Web Store
        Developer Account, you acknowledge that you remain responsible for your
        extension, its source code, compliance with Chrome Web Store policies,
        and any applicable legal obligations. Hall of Codes reserves the right
        to approve, decline, update, suspend, or remove any published extension
        at its sole discretion.
      </p>
    </div>
  );
}
