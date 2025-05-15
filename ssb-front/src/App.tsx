import React from "react";
import logo from "./logo.svg";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Main from "@/pages/Main/Main";
import Introduction from "@/pages/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
