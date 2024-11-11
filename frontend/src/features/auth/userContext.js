import { createContext } from "react";

export const UserContext = createContext({
  user: { id: 0, name: "zoe", email: "zoe@gmail.com" },
  status: "inconnu", // inconnu | connecté | non  connecté
  setStatus: (status) => {},
  setUser: (user) => {},
  fetchUser: async () => {},
});
