import * as React from 'react';

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { FC, useState, useRef, useCallback } from "react";
import "./App.css";


import NavBar from "./components/NavBar";
import Pricing from "./components/Pages/Pricing";
import Home from "./components/Pages/Home";
import LeaderBoard from './components/Pages/LeaderBoard';
import QueryExample  from './components/Pages/QueryExample';
import LoginForm from './components/LoginForm/LoginForm';



const App: FC = () => {

 
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/leader-board" element={<LeaderBoard />} />
          <Route path="/queryexample" element={<QueryExample />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
