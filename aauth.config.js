// export const authConfig = {
//   pages: {
//     signIn: "/auth/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnHomepage = nextUrl.pathname.startsWith("/");
//
//       if (isOnHomepage) {
//         return isLoggedIn ? true : false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/chat-panel/1", nextUrl));
//       }
//
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// };
