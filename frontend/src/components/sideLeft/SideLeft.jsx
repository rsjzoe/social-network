import "./SideLeft.css";
import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { Search } from "./components/search";

export function SideLeft(props) {
  const [isDarkModeActive, SetDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const enterLoading = () => {
    setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 6000);
  };

  return (
    <>
      <div className="side-left">
        <div className="side-left-fixed">
          <Link to={"profil"} className="user">
            <div className="user-profil">
              <img src="image/phone.png" alt="" className="user-img" />
              <span>lalalisa</span>
            </div>
            <div className="follow-container">
              <div className="follow">
                <span>followers</span>
                <span>97M</span>
              </div>
              <div className="follow">
                <span>following</span>
                <span>40</span>
              </div>
            </div>
          </Link>
          <div className="list-container">
            <Search />
            <div
              className="list"
              onClick={() => {
                SetDarkMode(!isDarkModeActive);
              }}
            >
              <img
                src={
                  isDarkModeActive
                    ? "sun-svgrepo-com.svg"
                    : "moon-svgrepo-com.svg"
                }
                alt=""
              />
              <span>{isDarkModeActive ? "Light mode" : "Dark Mode"}</span>
            </div>
            <div className="list">
              <img src="setting-svgrepo-com.svg" alt="" />
              <span>Settings</span>
            </div>
            <Button
              type="primary"
              icon={<PoweroffOutlined size={50} />}
              loading={loading}
              className="log-out"
              onClick={() => enterLoading(1)}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
