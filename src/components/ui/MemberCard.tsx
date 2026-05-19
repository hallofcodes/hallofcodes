import { Member } from "@/lib/github/members";
import Image from "next/image";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article
      className="group flex flex-col items-center text-center bg-gray-900 rounded-lg p-6 shadow"
      data-aos="fade-up"
    >
      <Image
        src={member.avatar}
        alt={member.login}
        width={96}
        height={96}
        loading="lazy"
        className="group-hover:scale-110 transition-transform duration-300 rounded-full mb-4 object-cover"
      />
      <div className="font-medium text-white">{member.login}</div>
    </article>
  );
}
