/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.tgdd.vn",
        port: "",
        pathname: "/**", // Allow all paths from this hostname
      },
      {
        protocol: "https",
        hostname: "cdnv2.tgdd.vn",
        port: "",
        pathname: "/**", // Allow all paths from this hostname
      },
    ],
  },
};

export default nextConfig;
