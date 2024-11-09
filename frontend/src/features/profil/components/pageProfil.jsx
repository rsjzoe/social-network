export function PageProfil({
  pseudo,
  img,
  nbPost,
  nbfollower,
  nbfollowing,
  btn1,
  btn2,
}) {
  return (
    <>
      <div className="profile-page">
        <div className="head-profil">
          <div className="user-photo-profil">
            <img src={img} alt="" />
          </div>
          <div className="user-follower-container">
            <div className="name-user">
              <span>{pseudo}</span>
            </div>
            <div className="container-detail">
              <div className="detail-user-profil">
                <p>
                  <span className="number">{nbPost}</span> posts
                </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">{nbfollower}</span> Followers
                </p>
              </div>
              <div className="detail-user-profil">
                <p>
                  <span className="number">{nbfollowing}</span> Following
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="btn1">{btn1}</button>
              <button className="btn2">{btn2}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
