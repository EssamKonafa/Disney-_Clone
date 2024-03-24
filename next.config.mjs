/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.cdnlogo.com'
            }
        ]
    }
};

export default nextConfig;
