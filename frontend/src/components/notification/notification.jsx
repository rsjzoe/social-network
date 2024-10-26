import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "./notification.css";

const Notification = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Notification"
        onClose={onClose}
        open={open}
        placement="left"
        style={{ width: "320px" }}
      >
        <div className="notif-side-left">
          <div className="notif-container">
            <img src="image/photo5.png" alt="" />
            <p>
              <span>Aniesse</span> Liked your post. 2min
            </p>
          </div>
          <div className="notif-container">
            <img src="image/disnep.jpg" alt="" />
            <p>
              <span>Disney+</span> Started following you. 4h
            </p>
            <button className="follo">follows</button>
          </div>
          <div className="notif-container">
            <img src="image/photo4.png" alt="" />
            <p>
              <span>Audrey_</span> Started following you. 1d
            </p>
            <button className="follo">confirm</button>
          </div>
          <div className="notif-container">
            <img src="image/photo.png" alt="" />
            <p>
              <span>kittyxx</span> invited you to join their broadcast. 1w
            </p>
          </div>

        </div>
      </Drawer>
    </>
  );
};
export default Notification;
