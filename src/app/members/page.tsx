import MemberCard from "@/components/ui/MemberCard";
import { getMembers, Member } from "@/lib/github/members";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Members - Hall of Codes",
  description: "Meet the talented individuals who make up our community.",
  alternates: {
    canonical: "https://hallofcodes.vercel.app/members",
  },
  openGraph: {
    title: "Our Members - Hall of Codes",
    description: "Meet the talented individuals who make up our community.",
    url: "https://hallofcodes.vercel.app/members",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://hallofcodes.vercel.app/cover.jpg",
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
    title: "Our Members - Hall of Codes",
    description: "Meet the talented individuals who make up our community.",
    images: [
      {
        url: "https://hallofcodes.vercel.app/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
};

export default async function Members() {
  const members = await getMembers();

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Our Members
      </h1>
      <div className="text-gray-400 mb-12">
        We are proud to have a diverse and talented group of members who
        contribute to our community. Here are some of the amazing people who
        make up our organization:
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {members.map((member: Member, index: number) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
