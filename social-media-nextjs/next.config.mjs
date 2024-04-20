/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wuubi-media.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ucuncubinyil.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
