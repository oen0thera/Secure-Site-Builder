import React from "react";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Main from "@/pages/Main/Main";
import Introduction from "@/pages/Introduction/Introduction";
import Login from "./pages/Login/Login";
import GNB from "./components/GNB/GNB";
import About from "./pages/Introduction/Stages/Content/Showcase/ShowcaseUnit/ShowcaseDetails/About/About";
import Template from "./pages/Templates/Template";
import Custom from "./pages/Custom/Custom";

function App() {
  return (
    <div className="app">
      <GNB />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/intro/about" element={<About />} />
        <Route path="/templates" element={<Template />} />

        <Route path="/login" element={<Login />} />
        <Route path="/custom" element={<Custom/>}/>
      </Routes>
    </div>
  );
}

export default App;
