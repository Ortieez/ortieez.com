import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com*",
      },
    ],
  },
};
export default MillionLint.next({
  rsc: true,
})(nextConfig);
