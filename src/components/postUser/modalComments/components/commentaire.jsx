export function Commentaire({srcImg, nameUser, comment}) {
  return (
    <>
      <div className="commentaire-container">
        <div className="coms-container">
          <img src={srcImg} alt="" />
          <div className="coms-repondre">
            <div className="commentaire">
              <span>{nameUser}</span>
              <p>{comment}</p>
            </div>
            <div className="repondre">
              <span>14min</span>
              <span>Like</span>
              <span>answer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-input">
        <img src="cam.svg" alt="" className="icon" />
        <input type="text" placeholder="write comment..." />
        <img src="send1.svg" alt="" className="icon" />
      </div>
    </>
  );
}
