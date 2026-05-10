import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines - Hall of Codes",
  description:
    "Please read and follow our community guidelines to ensure a positive and respectful environment for all members.",
  alternates: {
    canonical: "https://hallofcodes.vercel.app/community-guidelines",
  },
  openGraph: {
    title: "Community Guidelines - Hall of Codes",
    description:
      "Please read and follow our community guidelines to ensure a positive and respectful environment for all members.",
    url: "https://hallofcodes.vercel.app/community-guidelines",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://hallofcodes.vercel.app/hoc-cover.png",
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
    title: "Community Guidelines - Hall of Codes",
    description:
      "Please read and follow our community guidelines to ensure a positive and respectful environment for all members.",
    images: [
      {
        url: "https://hallofcodes.vercel.app/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
};

export default function CommunityGuidelines() {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Community Guidelines
      </h1>
      <div className="text-gray-400 mb-12">
        Welcome to Hall of Codes! We’re a collaborative, high-energy community
        built on respect, curiosity, and momentum. To keep the group valuable,
        safe, and fun for everyone, please follow these guidelines.
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Be Respectful, Always</h3>
          <p className="text-gray-500">
            Treat all members with dignity. Harassment, hate speech, threats,
            discrimination, bullying, or personal attacks are not tolerated.
            Disagreements are normal, but disrespect is not.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Keep It Interesting</h3>
          <p className="text-gray-500">
            Any topic that keeps the group interesting is allowed—tech, careers,
            startups, tools, productivity, AI, open source, and even light
            off-topic conversations. Just avoid content that harms the
            community’s atmosphere or safety.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">No Spam or Flooding</h3>
          <p className="text-gray-500">
            Avoid repetitive posts, excessive self-promotion, unrelated links,
            or automated content dumps. Share with intent: add context, explain
            why it matters, and help the community learn.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contribute Positively</h3>
          <p className="text-gray-500">
            Help others grow. Share feedback that is constructive, not
            destructive. Offer resources, guidance, and support when you can.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Respect Privacy</h3>
          <p className="text-gray-500">
            Do not share personal information of others without permission.
            Private messages, screenshots, and private details must remain
            private unless explicitly allowed by the original sender.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Group Identity Is Protected</h3>
          <p className="text-gray-500">
            Changing the group name, description, or icons is strictly
            prohibited. These are official brand assets and should not be
            altered without authorization from the admins.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Wit Happens</h3>
          <p className="text-gray-500">
            Sometimes messages may be witty, sarcastic, or playful. Don’t take
            things personally. If something feels off, ask for clarity before
            escalating.
          </p>
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
          <h3 className="text-lg font-semibold">Enforcement & Bans</h3>
          <p className="text-gray-500">
            Violations may result in warnings, message removal, temporary
            removal, or bans. Temporary bans range from a minimum of 2 weeks up
            to 6 months, depending on the severity and repetition of the
            behavior. Severe violations may result in immediate removal without
            warning.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-400">
        By participating in Hall of Codes, you agree to follow these rules. Help
        us keep this space respectful, useful, and fun.
      </p>
    </div>
  );
}
