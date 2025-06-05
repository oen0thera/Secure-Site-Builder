import React from "react";
import logo from "./logo.svg";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Main from "@/pages/Main/Main";
import Introduction from "@/pages/Introduction/Introduction";
import Login from "./pages/Login/Login";
import GNB from "./components/GNB/GNB";
import About from "./pages/Introduction/Stages/Content/Showcase/ShowcaseUnit/ShowcaseDetails/About/About";

function App() {
  return (
    <div className="app">
      <GNB />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/intro/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
