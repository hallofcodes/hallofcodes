import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import ScrollTop from "@/components/ui/ScrollTop";
import { getRecentPosts } from "@/lib/posts";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

const locales = ["en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) return notFound();

  setRequestLocale(locale);

  const posts = getRecentPosts(5);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Nav />

      <NextTopLoader showSpinner={false} />

      <main>{children}</main>

      <ScrollTop />

      <Footer posts={posts} />
    </NextIntlClientProvider>
  );
}
