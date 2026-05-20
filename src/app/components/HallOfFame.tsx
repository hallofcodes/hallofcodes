import { WakaTimeUser } from "@/lib/wakatime/leaderboards";

const crown = "👑";

function RankBadge({ rank }: { rank: number }) {
  const styles =
    rank === 1
      ? "bg-yellow-500 text-black"
      : rank === 2
        ? "bg-gray-300 text-black"
        : "bg-orange-500 text-black";

  return (
    <div
      className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold shadow-md ${styles}`}
    >
      {rank === 1 ? crown : rank}
    </div>
  );
}

function Card({ member, rank }: { member: WakaTimeUser; rank: number }) {
  const glow =
    rank === 1
      ? "border-yellow-500 shadow-yellow-500/20"
      : rank === 2
        ? "border-gray-400 shadow-gray-400/10"
        : "border-orange-500 shadow-orange-500/10";

  return (
    <div
      className={`relative w-full rounded-2xl border bg-black/40 backdrop-blur-md p-6 ${glow} shadow-xl`}
    >
      <RankBadge rank={rank} />

      <div className="flex flex-col items-center text-center gap-3 mt-4">
        <img
          src={`https://avatars.githubusercontent.com/${member.username}`}
          alt={member.name}
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h3 className="text-white text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-400 text-sm">@{member.username}</p>
        </div>

        <div className="mt-2 text-sm text-white/80">
          <span className="text-white font-semibold">{member.codingTime}</span>{" "}
          coding time
        </div>

        {/* Languages */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {member.languages.slice(0, 5).map((lang) => (
            <span
              key={lang}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HallOfFame({ members }: { members: WakaTimeUser[] }) {
  const top3 = members.slice(0, 3);

  return (
    <>
      <div className="text-center mb-12">
        <div className="text-3xl font-bold tracking-wide" data-aos="fade-up">
          {crown} Hall of Fame
        </div>
        <p className="text-gray-400 mt-2" data-aos="fade-up">
          Every action counts. Here are the top coders in our community based on
          their WakaTime coding time. Keep coding to see your name here!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {top3[1] && (
          <div
            className="md:translate-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Card member={top3[1]} rank={2} />
          </div>
        )}

        {top3[0] && (
          <div
            className="md:scale-110 z-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card member={top3[0]} rank={1} />
          </div>
        )}

        {top3[2] && (
          <div
            className="md:translate-y-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Card member={top3[2]} rank={3} />
          </div>
        )}
      </div>
    </>
  );
}
