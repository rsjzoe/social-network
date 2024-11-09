import { useUser } from "./useUser";
import { Navigate } from "react-router-dom";

export function ConnectedRoute({ children }) {
  const { status } = useUser();
  if (status == "inconnu") return <div className="">LOADING...</div>;
  if (status == "non connecté") return <Navigate to={"/login"} />;
  return <>{children}</>;
}
