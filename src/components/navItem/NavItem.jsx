import { Link } from "react-router-dom";

export function NavItem({ src , className, compteur, href, onclick}) {
  return (
    <>
      <Link to={href} className={"nav-item " + className} onClick={onclick}>
        <img src={src} alt="" />
        {
          compteur != "0" ?<span className="notif">{compteur}</span>: null
        }
      </Link>
    </>
  );
}
