import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      ["@swc/plugin-noop/",{}],
      // [
      //   "swc-plugin-pre-paths",
      //   {
      //     "baseUrl": ".",
      //     "paths": {
      //       "app/*": ["./src/app/*"],
      //       "config/*": ["./src/app/_config/*"],
      //       "environment/*": ["./src/environments/*"],
      //       "shared/*": ["./src/app/_shared/*"],
      //       "helpers/*": ["./src/helpers/*"],
      //       "tests/*": ["./src/tests/*"]
      //     }
      //   }
      // ]
    ],
  },
};

export default nextConfig;
