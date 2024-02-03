import React from "react";
import "./App.css";
import { SeConnecter } from "./components/SeConnecter";
import { CreerCompte } from "./components/CreerCompte";
import { Overlay } from "./components/Overlay";
import { useState } from "react";
import { Outlet } from "react-router-dom";
// import mario from './image/mario.gif';
export default function App() {
  const [isCreate, setCreate] = useState(false);

  return (
    <div className="App">
      <div
        className={`container ${isCreate ? "right-panel-active" : ""}`}
        id="container"
      >
        <SeConnecter
          age="10"
          onclick={() => {
            setCreate(true);
          }}
        />
        <CreerCompte
          onclick={() => {
            setCreate(false);
          }}
        />
        <Overlay iscreate={isCreate} />
      </div>
    </div>
  );
}
