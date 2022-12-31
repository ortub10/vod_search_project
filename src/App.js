import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import VodInput from "./components/vodInput";

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
