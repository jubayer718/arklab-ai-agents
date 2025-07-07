/* eslint-disable @typescript-eslint/no-unused-vars */
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import { NextAuthOptions } from 'next-auth';


// export const authOption: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   pages: {
//     signIn: '/',
//   },
//   callbacks: {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     async redirect({ url, baseUrl }) {
//       return '/agents'
//     },
//   },
// };

// const handler = NextAuth(authOption);
// export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn:'/'
  }
  ,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/agents';
    },
  },
});

export { handler as GET, handler as POST };
