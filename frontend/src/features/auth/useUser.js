import { useContext } from "react";
import { UserContext } from "./userContext";

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
