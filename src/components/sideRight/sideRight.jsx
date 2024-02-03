import "./SideRight.css";

export function SideRight(props) {
  return (
    <>
      <div className="side-right">
        <div className="side-right-fixed">
          <div className="head">
              <span>suggestion</span>
          </div>
          <div className="sugg-container">
            <img src="image/photo4.png" alt="" />
            <p>
              <span>Camella</span> Suggested for u
            </p>
            <button className="suivre">follow</button>
          </div>
          <div className="sugg-container">
            <img src="image/disnep.jpg" alt="" />
            <p>
              <span>Disney+</span> Suggested for u
            </p>
            <button className="suivre">follow</button>
          </div>
          <div className="sugg-container">
            <img src="image/photo3.png" alt="" />
            <p>
              <span>Aniesse</span> perhaps u know
            </p>
            <button className="suivre">follow</button>
          </div>
        </div>
      </div>
    </>
  );
}
