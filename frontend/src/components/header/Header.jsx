import { useState } from "react";
import { NavItem } from "../navItem/NavItem";
import ModalPublication from "./components/modal";
import "./Header.css";
import Notification from "../notification/notification";
import { Link } from "react-router-dom";

export function Header(props) {
  const [navActive, setNavActive] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <header className="">
        <div className="brand">
          <img src="/image/logo3.png" alt="" className="logo" />
          <p>
            <span>Chat</span>Share
          </p>
        </div>
        <div className="nav-bar">
          <NavItem
            src={"/home-svgrepo-com.svg"}
            className={navActive == "home" ? "active" : ""}
            compteur={"0"}
            onclick={() => {
              setNavActive("home");
            }}
          />
          <NavItem
            src={"/messenger-svgrepo-com.svg"}
            className={navActive == "message" ? "active" : ""}
            compteur={"3"}
            href={"/message"}
            onclick={() => {
              setNavActive("message");
            }}
          />
          <NavItem
            src={"/notification-svgrepo-com.svg"}
            compteur={"9+"}
            onclick={() => {
              setOpen(true);
            }}
          />
          <NavItem
            src={"/plus-square-svgrepo-com.svg"}
            compteur={"0"}
            onclick={() => {
              setIsModalOpen(true);
            }}
          />
        </div>

        <Link to={"profil"} className="profil">
          <span>
            <p>Rsj_zoe</p>
            <img src="/image/phone.png" alt="" />
          </span>
        </Link>
      </header>
      <div className="modal">
        <ModalPublication
          isOpen={isModalOpen}
          handleCancel={() => {
            setIsModalOpen(false);
          }}
        />
      </div>

      <div className="side-notification">
        <Notification
          onClose={() => {
            setOpen(false);
          }}
          open={open}
        />
      </div>
    </>
  );
}
