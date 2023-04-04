import ImageKit from 'imagekit-javascript'

const devEnv = process.env.NEXT_PUBLIC_NODE_ENV =="development"


export const imagekit = new ImageKit({
    publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL!,
    authenticationEndpoint:devEnv?process.env.NEXT_PUBLIC_DEV_IMAGEKIT_AUTH_ENDPOINT:process.env.NEXT_PUBLIC_PROD_IMAGEKIT_AUTH_ENDPOINT
})
