import { useState } from "react";
import './Publication.css';
export function Publication(props) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      <div className="publication">
        <div className="head-pub">
          <div className="user-pub">
            <img src="image/photo5.png" alt="" className="sary-user" />
            <span>lalalalisa_m</span>
            <img src="check-badge-svgrepo-com.svg" alt="" className="badge" />
            <span className="times">. 1d</span>
          </div>
          <img src="menu-dots-svgrepo-com.svg" alt="" className="menu-dots" />
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae atque
          assumenda soluta quam quod ullam cupiditate eius, aut nulla eum
          aliquid id velit{":))"}
        </p>
        <img src="image/photo3.png" alt="" className="img-pub" />
        <div className="footer-pub">
          <div className="action-container">
            <div className="action">
              <img
                src={isLiked ? "heart2.svg" : "heart-svgrepo-com.svg"}
                alt=""
                onClick={() => {
                  setIsLiked(!isLiked);
                }}
              />
              <span>3M</span>
            </div>
            <div className="action">
              <img src="coms.svg" alt="" className="" />
              <span>105</span>
            </div>
          </div>
          <img src="save-svgrepo-com.svg" alt="" className="save" />
        </div>
      </div>

      <div className="publication">
        <div className="head-pub">
          <div className="user-pub">
            <img src="image/disnep.jpg" alt="" className="sary-user" />
            <span>Disney+</span>
            <img src="check-badge-svgrepo-com.svg" alt="" className="badge" />
            <span className="times">. 1w</span>
          </div>
          <img src="menu-dots-svgrepo-com.svg" alt="" className="menu-dots" />
        </div>

        <p>
          RATA-TWO-ILLE! <br />
          Get ready for a delectable adventure in "ratatouille", the 
          enchanting Disney-Pixar sequel to ratatouille! in theater this November...
        </p>
        <img src="image/ratatouille2.jpg" alt="" className="img-pub" />
        <div className="footer-pub">
          <div className="action-container">
            <div className="action">
              <img
                src={isLiked ? "heart2.svg" : "heart-svgrepo-com.svg"}
                alt=""
                onClick={() => {
                  setIsLiked(!isLiked);
                }}
              />
              <span>2M</span>
            </div>
            <div className="action">
              <img src="coms.svg" alt="" className="" />
              <span>1K</span>
            </div>
          </div>
          <img src="save-svgrepo-com.svg" alt="" className="save" />
        </div>
      </div>
    </>
  );
}
