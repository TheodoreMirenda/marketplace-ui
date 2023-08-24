/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions : true,
    },
    reactStrictMode: false,
    basePath: '/TheFishStore',
    // images: {
    //     path: 'https://localhost:3000/TheFishStore/',
    // },
    // assetPrefix: '/TheFishStore',
    // images: {
    //     loader: 'imgix',
    //     path: 'https://fishstore.s3.amazonaws.com/',
    // },
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback.fs = false
    //     }
    //     return config
    // }
}

module.exports = nextConfig
