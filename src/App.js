import "./App.css";
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
