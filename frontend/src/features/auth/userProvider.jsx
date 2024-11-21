import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { serverUrl } from "../../constants";
import { useLocation, useSearchParams } from "react-router-dom";

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 3,
    name: "rabedfgdsrt",
    email: "vola",
  });
  const [status, setStatus] = useState("inconnu");

  const fetchMe = async () => {
    const response = await fetch(`${serverUrl}/me`, {
      method: "get",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json(); // ito le user
      setUser(data);
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
          fetchUser: fetchMe,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
