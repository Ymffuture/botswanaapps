import NextAuth from "next-auth/next";


export const authOptions = {
    providers: [
    {
        id: "descope",
        name: "Descope",
        type: "oauth",
        wellKnown: `https://api.descope.com/P32y0x4aKhwFu9hStLcOXk4MV1Ie/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId: 'P32y0x4aKhwFu9hStLcOXk4MV1Ie' ,
        clientSecret: "<Descope Access Key>",
        checks: ["pkce", "state"],
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },
    }]
}  


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
