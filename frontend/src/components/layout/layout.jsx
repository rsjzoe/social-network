import { Outlet } from "react-router-dom";
import { SideLeft } from "../sideLeft/SideLeft";
import { Header } from "../header/Header";
import "./layout.css";
import { SideRight } from "../sideRight/sideRight";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Link } from "react-router-dom";

export function Layout(props) {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <SideLeft />
        <div className="main-center">
          <Outlet />
        </div>
        <SideRight />
      </div>

      <Link to={"/message"}>
        <FloatButton
          icon={<img src="edit-svgrepo-com.svg" className="edit" alt="" />}
          type="primary"
          style={{
            right: 24,
            background: "transparent",
          }}
          tooltip={<div>message</div>}
          className="float-btn"
        />
      </Link>
    </div>
  );
}
