import { getRequestConfig } from "next-intl/server";

const locales = ["en"] as const;
export const supportedLocales = [];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  const safeLocale = locales.includes(locale as "en") ? locale : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
