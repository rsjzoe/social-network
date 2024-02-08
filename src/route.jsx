import * as React from "react";
import App from "./login/App";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { Accueil } from "./Accueil/Accueil";
import { Message } from "./message/message";
import {Profil} from "./profil/profil";
import { Chatbox } from "./chatBox/chatbox";
import { ProfilOther } from "./profil/otherUser/profilOther";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Accueil />,
      },
      {
        path: "message",
        element: <Message/>,
      },
      {
        path: "chatBox",
        element: <Chatbox/>
      },
      {
        path: "profil",
        element: <Profil/>
      },
      {
        path: "otherUser",
        element: <ProfilOther/>
      }

    ],
  },
  {
    path: "/login",
    element: <App />,
  },
]);
