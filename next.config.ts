import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const ContentSecurityPolicy = `
  default-src 'self';

  base-uri 'self';
  object-src 'none';

  frame-ancestors 'none';

  script-src 'self' 'unsafe-inline';

  style-src 'self' 'unsafe-inline';

  img-src
    'self'
    data:
    blob:
    https://excelinweb.com
    https://start.excelinweb.com
    https://avatars.githubusercontent.com
    https://opengraph.githubassets.com
    https://github.com;

  font-src
    'self'
    data:
    https://fonts.gstatic.com;

  connect-src 'self';

  frame-src 'none';

  worker-src 'self' blob:;
`.replace(/\n/g, "");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "www.hallofcodes.org",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
