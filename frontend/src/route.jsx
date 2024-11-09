import * as React from "react";
import App from "./features/login/App";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { Accueil } from "./features/Accueil/Accueil";
import { Message } from "./features/message/message";
import { Profil } from "./features/profil/profil";
import { Chatbox } from "./features/chatBox/chatbox";
import { ProfilOther } from "./features/profil/otherUser/profilOther";

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
        element: <Message />,
      },
      {
        path: "chatBox",
        element: <Chatbox />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "otherUser",
        element: <ProfilOther />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
  },
]);
