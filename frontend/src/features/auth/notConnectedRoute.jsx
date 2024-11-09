import { useUser } from "./useUser";
import { Navigate } from "react-router-dom";

export function NotConnectedRoute({ children }) {
  const { status } = useUser();
  if (status == "inconnu") return <div className="">LOADING...</div>;
  if (status == "connecté") return <Navigate to={"/"} />;
  return <>{children}</>;
}
