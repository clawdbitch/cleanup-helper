/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as standalone for better deployment
  output: 'export',
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
  
  // Disable server-side features for static export
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

module.exports = nextConfig;
