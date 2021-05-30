const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js'
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug'
  }
]

module.exports = {
  rewrites,
  future: {
    webpack5: true
  },
  experimental: {
    turboMode: true,
    eslint: true
  }
}
