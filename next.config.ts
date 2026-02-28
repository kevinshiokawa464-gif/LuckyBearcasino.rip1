import type { NextConfig } from "next";
<<<<<<< HEAD
import path from "node:path";

// Loader path from orchids-visual-edits - use direct resolve to get the actual file
const loaderPath = require.resolve('orchids-visual-edits/loader.js');
=======
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
<<<<<<< HEAD
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
=======
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
<<<<<<< HEAD
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [loaderPath]
      }
    }
  }
=======
>>>>>>> 316b9c18e834a61e70fec81a83ff2ab9fd09be36
} as NextConfig;

export default nextConfig;
