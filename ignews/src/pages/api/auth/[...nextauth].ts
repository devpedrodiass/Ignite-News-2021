import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { fauna, q } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          // I wish to request additional permission scopes.
          scope: "read:user",
        },
      },
    }),
    // ...add more providers here
  ],
  // jwt: {
  //   signingKey: process.env.SIGNING_KEY,
  // },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("entrou");
      const { email } = user;

      try {
        await fauna
          .query(
            q.If(
              q.Not(
                q.Exists(
                  q.Match(q.Index("user_by_email"), q.Casefold(user.email))
                )
              ),
              q.Create(q.Collection("users"), {
                data: { email },
              }),
              q.Get(
                q.Exists(
                  q.Match(q.Index("user_by_email"), q.Casefold(user.email))
                )
              )
            )
          )
          .then((res) => res);
        return true;
      } catch (error) {
        console.error("Error: ", error);
        return false;
      }
    },
  },
});
