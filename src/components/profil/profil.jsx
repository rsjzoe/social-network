import { Post } from "./components/post";
import "./profil.css";
export function Profil(props) {
  return (
    <>
      <div className="profile-page">
        <div className="head-profil">
          <div className="user-photo-profil">
            <img src="image/photo5.png" alt="" />
          </div>
          <div className="user-follower-container">
            <div className="name-user">
              <span>roses_are_rosie</span>
            </div>
            <div className="container-detail">
              <div className="detail-user-profil">
                    <p>
                      <span className="number">0</span> posts
                    </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">97M</span> Followers
                </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">40</span> Following
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="btn1">edite profile</button>
              <button className="btn2">share profile</button>
            </div>
          </div>
        </div>
      </div>
      <Post/>
    </>
  );
}
