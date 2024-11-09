import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { serverUrl } from "../../constants";

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 3,
    name: "rabedfgdsrt",
    email: "vola",
  });
  const [status, setStatus] = useState("inconnu");
  const fetchMe = async () => {
    const response = await fetch(`${serverUrl}/me`, { credentials: "include" });
    if (response.ok) {
      return setStatus("connecté");
    }
    setStatus("non connecté");
  };
  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          status: status,
          setStatus: setStatus,
          setUser: setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
