import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC, useState, useRef, useCallback } from "react";
import "./App.css";


import NavBar from "./components/NavBar";
import Pricing from "./components/Pages/Pricing";
import Home from "./components/Pages/Home";




const App: FC = () => {

  return (
    <>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
