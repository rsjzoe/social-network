import { useState } from "react";
import { Link } from "react-router-dom";
import ModalMenu from "./modalMenu/modalMenu";
import ModalComs from "./modalComments/modalComs";

export function PostUser(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalMenu, setIsModalMenu] = useState(false);
  const [isModalComs, setIsModalComs] = useState(false);

  return (
    <>
      <div className="publication">
        <div className="head-pub">
          <Link to={"/otherUser"} className="user-pub">
            <img src="image/photo3.png" alt="" className="sary-user" />
            <span>lalalalisa_m</span>
            <img src="check-badge-svgrepo-com.svg" alt="" className="badge" />
            <span className="times">. 1d</span>
          </Link>
          <img
            src="menu-dots-svgrepo-com.svg"
            alt=""
            className="menu-dots"
            onClick={() => setIsModalMenu(true)}
          />
        </div>

        <p>
          RATA-TWO-ILLE!! <br />
          Get ready for a delictable adventure in "ratatouille", the enchanting
          Disney-Pixar sequel to ratatouille! Join Remy and Linguin as they navigate the 
          culinary world...
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
              <span>3M</span>
            </div>
            <div className="action">
              <img
                src="coms.svg"
                alt=""
                className=""
                onClick={() => {
                  setIsModalComs(true);
                }}
              />
              <span>105</span>
            </div>
          </div>
          <img
            src={isSaved ? "bookmark-svgrepo-com.svg" : "save-svgrepo-com.svg"}
            alt=""
            className="save"
            onClick={() => {
              setIsSaved(!isSaved);
            }}
          />
        </div>
      </div>
      <ModalMenu
        isModalMenuOpen={isModalMenu}
        modalMenuCancel={() => {
          setIsModalMenu(false);
        }}
      />
      <ModalComs
        isModalcomsOpen={isModalComs}
        modalcomsCancel={() => {
          setIsModalComs(false);
        }}
      />
    </>
  );
}
