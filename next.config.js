/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${process.env.SANITY_PROJECTID}/production/**`,
      },
    ],
  },
};

module.exports = nextConfig;
