/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URI_MONGO: process.env.URI_MONGO,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    URL_LOCAL: process.env.URL_LOCAL,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
