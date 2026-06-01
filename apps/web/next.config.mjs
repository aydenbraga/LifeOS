/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to complete even if
    // your project has type errors.
    // cheers to a successful deploy!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
