import "./../profil/profil.css";
import { PostUser } from "./components/postUser";
export function ProfilOther(props) {
  return (
    <>
      <div className="profile-page">
        <div className="head-profil">
          <div className="user-photo-profil">
            <img src="image/photo5.png" alt="" />
          </div>
          <div className="user-follower-container">
            <div className="name-user">
              <span>lalalalisa_m</span>
            </div>
            <div className="container-detail">
              <div className="detail-user-profil">
                <p>
                  <span className="number">1</span> posts
                </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">100M</span> Followers
                </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">0</span> Following
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="btn1">Follow(s)</button>
              <button className="btn2">message</button>
            </div>
          </div>
        </div>
      </div>
      <PostUser />
    </>
  );
}
