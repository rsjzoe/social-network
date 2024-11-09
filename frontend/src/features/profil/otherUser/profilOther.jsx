import { PageProfil } from "../components/pageProfil";
import "../profil.css";

export function ProfilOther(props) {
  return (
    <>
      <PageProfil
        pseudo={"lalalalisa_m"}
        img={"image/photo3.png"}
        nbPost={"1"}
        nbfollower={"100M"}
        nbfollowing={"0"}
        btn1={"follow(s)"}
        btn2={"message"}
      />
      {/* <PostUser /> */}
    </>
  );
}
