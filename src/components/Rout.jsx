import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Foot from "./Foot";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cards from "./Cards";
import Profile from "../pages/Profile";
import Eror from "../pages/Eror";
import Favourite from "../pages/Favourite";
export default function Rout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Eror" element={<Eror />} />
        <Route exact path="/Favourite" element={<Favourite />} />
      </Routes>
      {/* <Foot /> */}
    </div>
  );
}
