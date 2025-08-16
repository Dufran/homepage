import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
})
