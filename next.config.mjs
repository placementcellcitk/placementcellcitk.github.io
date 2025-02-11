/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
 output: "export",
 images: {
  unoptimized: true, // Disables Next.js Image Optimization
},
  reactStrictMode: true,
};

export default nextConfig;
