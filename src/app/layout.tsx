import type { Metadata } from "next";
import { Source_Code_Pro, Maven_Pro } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import ScrollTop from "@/components/ui/ScrollTop";
import AOSWrapper from "@/components/shared/AOSWrapper";
import { getRecentPosts } from "@/lib/posts";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-heading",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hallofcodes.org"),
  title: "Hall of Codes - Merging Programmers Beyond Conflicts",
  description:
    "We revolutionize development by fostering cohesion among teams, transcending conflicts to drive collective innovation. Harnessing the synergy of diverse talents, we pave the way for seamless collaboration, ensuring projects thrive in an environment of unity and progress.",
  keywords: [
    "Hall of Codes",
    "programming community",
    "developers",
    "collaboration",
    "innovation",
    "open source",
    "technology",
    "software development",
  ],
  authors: [{ name: "Melvin Jones Repol", url: "https://mrepol742.github.io" }],
  creator: "Melvin Jones Repol",
  alternates: {
    canonical: "https://www.hallofcodes.org/",
  },
  openGraph: {
    title: "Hall of Codes - Merging Programmers Beyond Conflicts",
    description:
      "We revolutionize development by fostering cohesion among teams, transcending conflicts to drive collective innovation. Harnessing the synergy of diverse talents, we pave the way for seamless collaboration, ensuring projects thrive in an environment of unity and progress.",
    url: "https://www.hallofcodes.org/",
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
    title: "Hall of Codes - Merging Programmers Beyond Conflicts",
    description:
      "We revolutionize development by fostering cohesion among teams, transcending conflicts to drive collective innovation. Harnessing the synergy of diverse talents, we pave the way for seamless collaboration, ensuring projects thrive in an environment of unity and progress.",
    images: [
      {
        url: "https://www.hallofcodes.org/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getRecentPosts(5);

  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${mavenPro.variable}`}
      data-scroll-behavior="smooth"
    >
      <Head>
        <meta name="hostname" content="www.hallofcodes.org" />
      </Head>
      <body className="antialiased">
        <AOSWrapper />
        <Nav />

        <NextTopLoader showSpinner={false} />

        <main>{children}</main>

        <ScrollTop />

        <Footer posts={posts} />
      </body>
    </html>
  );
}
