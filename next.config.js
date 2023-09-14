const allowedImageWordPressDomain =
  new URL(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL).hostname ||
  'api.holivoo.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL.match(
        /(?!(w+)\.)\w*(?:\w+\.)+\w+/
      )[0], // Valid WP Image domain.
      'api.holivoo.com',
      allowedImageWordPressDomain,
      'via.placeholder.com',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
};

module.exports = nextConfig;
