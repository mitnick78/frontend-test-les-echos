/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // ← active le plugin babel/SWC pour styled-components
  },
};

module.exports = nextConfig;
