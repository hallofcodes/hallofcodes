import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const env = process.env.NODE_ENV;

export default async function proxy(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["en"],
    defaultLocale: "en",
    localePrefix: "as-needed",
  });

  // handle i18n routing for all other requests
  const response = handleI18nRouting(request);
  return response;
}

// excude static assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|videos|sw\\.js|.*\\.json$|.*\\.pdf$|.*\\.xml$|.*\\.md$|.*\\.mp4$|.*\\.jpg$|.*\\.png$|.*\\.ico$|.*\\.svg$|.*\\.webp$|.*\\.txt$).*)",
  ],
};
