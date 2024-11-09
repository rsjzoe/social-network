import { useUser } from "../auth/useUser";
import { PageProfil } from "./components/pageProfil";
import { Post } from "./components/post";
import "./profil.css";
export function Profil(props) {
  const { user } = useUser();
  return (
    <>
      <PageProfil
        pseudo={user.name}
        img={"image/photo5.png"}
        nbPost={"0"}
        nbfollower={"97M"}
        nbfollowing={"40"}
        btn1={"edite profil"}
        btn2={"share profil"}
      />
      <Post />
    </>
  );
}
