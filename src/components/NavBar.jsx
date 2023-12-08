import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  let isLogin = localStorage.getItem("isLogin");
  let username = localStorage.getItem("user");
  const navg = useNavigate("");

  const handelLogout = () => {
    navg("/login");
    localStorage.removeItem("user");

    localStorage.removeItem("UserId");
    localStorage.setItem("isLogin", false);
  };

  return (
    <>
      {isLogin == "true" ? (
        <div className="h-[10vh] w-[100vw] max-sm:h-[10vh] max-sm:w-[100vw] max-sm:grid max-sm:grid-cols-2 bg-black text-white flex justify-center items-center justify-between ">
          <Link to="/">
            <h1 className="ml-5 font-bold text-lg">Anime Time</h1>
          </Link>
          <ul className="mr-5 flex gap-10 max-sm:grid">
            <li>Watched</li>
            <Link to={"/Favourite"}>
              <li>Favourite</li>
            </Link>
            <button onClick={handelLogout}>
              <li>Log out</li>
            </button>
            <Link to="/profile">
              <li>{username}</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="h-[10vh] w-[100vw] max-sm:h-[10vh] max-sm:w-[100vw] max-sm:grid max-sm:grid-cols-2 bg-black text-white flex justify-center items-center justify-between ">
          <h1 className="ml-5 font-bold text-lg">Anime Time</h1>
          <ul className="mr-5 flex gap-10 max-sm:grid">
            <Link to="/login">
              <li>Log in </li>
            </Link>
            <Link to="/signup">
              <li>Sign up</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
