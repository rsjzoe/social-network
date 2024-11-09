import { useState } from "react";
import { UserContext } from "./userContext";

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 3,
    name: "rabedfgdsrt",
    email: "vola",
  });
  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
