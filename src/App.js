import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Products } from "./pages/Products.jsx";
import { Reports } from "./pages/Reports.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/reports" exact>
          <Reports />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
