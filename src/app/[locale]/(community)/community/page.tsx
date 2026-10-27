import PageHeader, {
  headerPrimaryAction,
  headerSecondaryAction,
} from "@/components/ui/PageHeader";
import ScrambleText from "@/components/ui/ScrambleText";
import {
  faFacebookMessenger,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChalkboardUser,
  faCodeBranch,
  faHandHoldingHeart,
  faLaptopCode,
  faLightbulb,
  faPenNib,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community - Hall of Codes",
  description:
    "Join the Hall of Codes community on GitHub, Codeberg, WhatsApp, and Messenger. Build, learn, and ship together.",
  alternates: {
    canonical: "https://www.hallofcodes.org/community",
  },
};

const channels = [
  {
    icon: faGithub,
    title: "GitHub",
    host: "github.com/hallofcodes",
    desc: "Central hub for code, discussions, and project management.",
    link: "https://github.com/hallofcodes",
  },
  {
    icon: faCodeBranch,
    title: "Codeberg",
    host: "codeberg.org/hall-of-codes",
    desc: "Alternative open-source platform for code hosting and collaboration.",
    link: "https://codeberg.org/hall-of-codes",
  },
  {
    icon: faWhatsapp,
    title: "WhatsApp",
    host: "chat.whatsapp.com",
    desc: "Real-time chat for quick questions, project updates, and casual conversation.",
    link: "https://chat.whatsapp.com/ICRRqZivQ9PB1kmmZMKNnq?s=cl&p=a&mlu=3",
  },
  {
    icon: faFacebookMessenger,
    title: "Messenger",
    host: "m.me",
    desc: "Instant messaging for announcements, discussions, and community bonding.",
    link: "https://m.me/j/AbajwXM3ZUXO7emx/?send_source=gc%3Acopy_invite_link_c",
  },
];

const events = [
  {
    icon: faChalkboardUser,
    title: "Hands-on workshops",
    desc: "Small-group sessions where you build something real by the end of the hour.",
  },
  {
    icon: faLaptopCode,
    title: "Build-a-thons",
    desc: "Time-boxed sprints where mixed teams take an idea from issue to deploy.",
  },
  {
    icon: faVideo,
    title: "Expert webinars",
    desc: "Talks from members who have shipped, scaled, and maintained in production.",
  },
];

const traits = [
  {
    title: "Starter friendly",
    desc: "Well scoped issues with clear guidance.",
  },
  {
    title: "Cross discipline",
    desc: "Designers and developers ship together.",
  },
  { title: "Real outcomes", desc: "Projects that solve real problems." },
  { title: "Mentor support", desc: "Get feedback and direction fast." },
];

const ways = [
  {
    icon: faLightbulb,
    title: "Pitch an idea",
    desc: "Bring an event or project idea and we will help shape it with people, resources, and visibility.",
    cta: "Share your idea",
    href: "#connect",
  },
  {
    icon: faPenNib,
    title: "Share your knowledge",
    desc: "Publish tutorials, write blog posts, or host sessions to help others level up.",
    cta: "Contribute content",
    href: "/blog/contribute-to-hall-of-codes-blog",
  },
  {
    icon: faHandHoldingHeart,
    title: "Become a mentor",
    desc: "Guide newer members and help projects ship with confidence.",
    cta: "Volunteer",
    href: "#connect",
  },
];

const criteria = [
  "Your portfolio must be authored by you and reflect your own projects or contributions.",
  "Forked or copied projects without meaningful original work are not accepted.",
  "If you used a starter, clearly document what you built and how you extended it.",
  "We may request proof of ownership or contribution history when needed.",
];

export default function Community() {
  return (
    <main className="bg-[#090d16] text-white">
      <PageHeader
        title="Build, learn, and ship together."
        subtitle="This is your crew."
        description="A high-signal space for developers, designers, and builders to collaborate, share knowledge, and launch meaningful projects together."
        watermark="crew"
        terminal={{
          path: "~/hallofcodes/community",
          command: "cat channels.txt",
          output: [
            ...channels.map((channel) => ({
              text: `${channel.title.toLowerCase().padEnd(10, " ")} ${channel.host}`,
            })),
            { text: "# pick one, say hi, ship something", muted: true },
          ],
        }}
        stats={[
          {
            value: String(channels.length).padStart(2, "0"),
            label: "places to find us",
          },
          { value: 2019, label: "talking code since" },
          { value: "0", label: "gatekeeping" },
        ]}
        actions={
          <>
            <a href="#connect" className={headerPrimaryAction}>
              Join the community
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
            <Link
              href="/community-guidelines"
              className={headerSecondaryAction}
            >
              Read the guidelines
            </Link>
          </>
        }
      />

      <section id="connect" className="scroll-mt-20 border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <ScrambleText
              as="h2"
              text="Join the conversation everywhere."
              durationMs={2000}
              className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl"
            />
            <p className="mt-6 max-w-md leading-8 text-gray-400">
              WhatsApp, Messenger, and GitHub keep us in sync. Ask questions,
              find collaborators, or just share what you are building.
            </p>
          </div>

          <ul className="border-t border-white/10">
            {channels.map((channel) => (
              <li key={channel.title}>
                <a
                  href={channel.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-5 border-b border-white/10 py-6 transition hover:bg-white/[0.02]"
                >
                  <span className="flex size-11 items-center justify-center border border-white/15 text-gray-300 transition group-hover:border-cyan-300 group-hover:text-cyan-300">
                    <FontAwesomeIcon icon={channel.icon} />
                  </span>
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-lg font-semibold text-white">
                        {channel.title}
                      </span>
                      <span className="font-mono text-xs text-gray-600">
                        {channel.host}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-gray-400">
                      {channel.desc}
                    </span>
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-sm text-gray-600 transition group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrambleText
            as="h2"
            text="Learn faster with high-impact events."
            durationMs={2000}
            className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl"
          />
          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            Workshops, build-a-thons, and webinars built to level up your skills
            and expand your network. Announcements land in our chat channels
            first.
          </p>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {events.map((event, index) => (
              <article
                key={event.title}
                className="group bg-[#090d16] p-8 transition hover:bg-white/[0.03]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center border border-white/15 text-gray-300 transition group-hover:border-cyan-300 group-hover:text-cyan-300">
                    <FontAwesomeIcon icon={event.icon} />
                  </span>
                  <span className="font-mono text-xs text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-400">{event.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrambleText
              as="h2"
              text="Build, share, and grow."
              durationMs={2000}
              className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl"
            />
            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Contribute to meaningful open-source projects, pitch new ideas,
              and help others level up through knowledge sharing.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
              {traits.map((trait) => (
                <div key={trait.title} className="bg-[#090d16] p-5">
                  <dt className="text-sm font-semibold text-white">
                    {trait.title}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-gray-500">
                    {trait.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-white/10">
            {ways.map((way) => (
              <Link
                key={way.title}
                href={way.href}
                className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[2.75rem_1fr_auto] sm:items-start"
              >
                <span className="flex size-11 items-center justify-center border border-white/15 text-gray-300 transition group-hover:border-cyan-300 group-hover:text-cyan-300">
                  <FontAwesomeIcon icon={way.icon} />
                </span>
                <span>
                  <span className="block text-2xl font-semibold text-white">
                    {way.title}
                  </span>
                  <span className="mt-2 block max-w-lg leading-7 text-gray-400">
                    {way.desc}
                  </span>
                </span>
                <span className="inline-flex items-center gap-3 text-sm font-semibold text-gray-300 transition group-hover:gap-5 group-hover:text-white sm:mt-2">
                  {way.cta}
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrambleText
            as="h2"
            text="Supported by partners who believe in builders."
            durationMs={2000}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl"
          />
          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            Our newest sponsor helps us grow the community and keep learning
            accessible to everyone.
          </p>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-[1.3fr_0.7fr]">
            <Link
              href="https://excelinweb.com/?utm_source=hallofcodes&utm_medium=referral&utm_campaign=sponsorship"
              target="_blank"
              className="group bg-[#090d16] p-8 transition hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center text-2xl font-semibold text-white gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://excelinweb.com/assets/images/logo/excelinweb-logo-white-transparent.png"
                    alt="ExcelinWeb"
                    className="h-10 w-auto opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <h3>ExcelinWeb</h3>
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm text-gray-600 transition group-hover:translate-x-1 group-hover:text-white"
                />
              </div>

              <ul className="mt-8 grid gap-6 text-sm leading-6 text-gray-400 md:grid-cols-3">
                {[
                  "Financial assistance for domain registration and related infrastructure costs.",
                  "Increased operational stability for the organization's online presence.",
                  "Opportunity to build long-term relationships with industry supporters and collaborators.",
                ].map((item, index) => (
                  <li key={item} className="border-t border-white/10 pt-4">
                    <span className="mb-2 block font-mono text-xs text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Link>

            <Link
              href="https://aiskillhub.dev/?utm_source=hallofcodes&utm_medium=referral&utm_campaign=sponsorship"
              target="_blank"
              className="group bg-[#090d16] p-8 transition hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center text-2xl font-semibold text-white gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://aiskillhub.dev/android-chrome-192x192.png"
                    alt="AISkillHub.dev"
                    className="h-10 w-auto opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <h3>AISkillHub.dev</h3>
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm text-gray-600 transition group-hover:translate-x-1 group-hover:text-white"
                />
              </div>

              <ul className="mt-8 grid gap-6 text-sm leading-6 text-gray-400 md:grid-cols-2">
                {[
                  "Collaboration on AI education, practical learning resources, and skill development.",
                  "Shared opportunities to help developers learn, experiment, and build with AI.",
                ].map((item, index) => (
                  <li key={item} className="border-t border-white/10 pt-4">
                    <span className="mb-2 block font-mono text-xs text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Link>

            <div className="flex flex-col justify-between gap-8 bg-[#090d16] p-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Want to sponsor Hall of Codes?
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Reach us through our official channels and we will guide you
                  through the sponsorship options.
                </p>
              </div>
              <a
                href="#connect"
                className={`${headerSecondaryAction} self-start`}
              >
                Contact us
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrambleText
            as="h2"
            text="Flex your portfolio with the community."
            durationMs={2000}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl"
          />
          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            Members can showcase portfolio designs built with their own themes
            and style, and get discovered by the community.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Originality criteria
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                To maintain a credible, high-quality showcase, submissions must
                reflect original work and clear ownership.
              </p>
              <ol className="mt-6 border-t border-white/10">
                {criteria.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-5 border-b border-white/10 py-4 text-sm leading-6 text-gray-300"
                  >
                    <span className="font-mono text-xs leading-6 text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                How to get featured
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Four steps and one pull request.
              </p>
              <ol className="mt-6 border border-white/10 bg-[#060910] p-5 font-mono text-[13px] leading-7 text-gray-400">
                <li>
                  <span className="text-cyan-300">$</span> git checkout -b
                  portfolio/your-name
                </li>
                <li>
                  <span className="text-cyan-300">$</span> $EDITOR
                  src/lib/portfolio.ts
                </li>
                <li>
                  <span className="text-cyan-300">$</span> cp screenshot.png
                  public/portfolio/
                </li>
                <li className="text-gray-600">
                  # compress it first at imagecompressor.com
                </li>
                <li>
                  <span className="text-cyan-300">$</span> gh pr create
                </li>
              </ol>
              <Link
                href="/portfolio"
                className={`${headerSecondaryAction} mt-6`}
              >
                View the portfolios
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
