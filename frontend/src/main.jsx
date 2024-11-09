import React from "react";
import ReactDOM from "react-dom/client";
import { route } from "./route";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { Button, ConfigProvider, Space } from "antd";
import { UserProvider } from "./features/auth/userProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#fe2c55",
        },
      }}
    >
      <UserProvider>
        <RouterProvider router={route} />
      </UserProvider>
    </ConfigProvider>
  </React.StrictMode>
);
