import { PageProfil } from "./components/pageProfil";
import { Post } from "./components/post";
import "./profil.css";
export function Profil(props) {
  return (
    <>
      <PageProfil
        pseudo={"roses_are_rosie"}
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
