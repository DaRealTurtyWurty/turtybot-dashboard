import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import {useRouter} from "next/navigation";

export const handler = NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds"
        })
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            const access_token = account?.access_token
            // eslint-disable-next-line react-hooks/rules-of-hooks
            await fetch("https://discord.com/api/users/@me/guilds", {
                headers: {
                    Authorization: "Bearer " + access_token,
                    "Content-Type": "application/json"
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);

                // todo: set the guilds to the user

            });

            return true;
        }
    }
});

export {handler as GET, handler as POST};