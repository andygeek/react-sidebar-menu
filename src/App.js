import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
