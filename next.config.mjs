import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});



const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jaedmuntonwebsite.s3.us-east-1.amazonaws.com',
                pathname: '/**'
            }
        ]
    },
};
export default withNextIntl(withMDX(nextConfig));