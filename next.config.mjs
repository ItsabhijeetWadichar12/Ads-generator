/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "static.website-files.org",
            "drz0f01yeq1cx.cloudfront.net"  // Add the cloudfront domain
        ]
    }
};

export default nextConfig;
