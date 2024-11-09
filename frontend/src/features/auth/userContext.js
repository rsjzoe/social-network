import { createContext } from "react";

export const UserContext = createContext({
  user: { id: 0, name: "zoe", email: "zoe@gmail.com" },
  setUser: (user) => {},
});
