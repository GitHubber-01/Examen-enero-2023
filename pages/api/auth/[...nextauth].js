import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async signIn({account, profile}) {
            await fetch(`${process.env.URL_LOCAL}/api/logs`, {
                body: JSON.stringify({
                    usuario: profile.email,
                    caducidad: Date.now() + account.expires_at,
                    token: account.id_token
                }),
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST"
            });
            return true;
        }
    }
});