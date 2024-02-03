import { Link } from "react-router-dom";

export function MessageItem({ src, name, msg}) {
  return (
    <>
      <Link to={"/chatBox"} className="list-messages">
        <img src={src} alt="" className="profil-msg" />
        <div className="name-user">
          <span className="name">{name}</span>

          <div className="msg">
            <span className="number-msg">1</span>
            <p>{msg}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
