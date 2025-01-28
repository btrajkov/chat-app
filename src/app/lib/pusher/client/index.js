import PusherClient from "pusher-js";

export const pusherClient = new PusherClient(process.env.PUSHER_APP_KEY, {
  cluster: process.env.PUSHER_APP_CLUSTER,
  authEndpoint: "/api/pusher/auth",
  auth: {
    params: {
      // TO BE MODIFIED
      // email: "",
      // password: ""
    },
  },
});
