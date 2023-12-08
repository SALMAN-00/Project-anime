import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem("isLogin", false);
  const navg = useNavigate("");

  const handelSubmit = () => {
    if (username === "" || password === "") {
      alert("Inputs is empty");
    } else {
      axios
        .get("https://655273ad5c69a779032a0b90.mockapi.io/Signup")
        .then(res => {
          const users = res.data.find(
            user => user.username === username && user.password === password
          );

          if (!users) {
            alert("Invalid username ot password");
          } else {
            navg("/");
            localStorage.setItem("isLogin", true);
            localStorage.setItem("user", users.username);
            localStorage.setItem("UserId", users.id);
            localStorage.setItem("Watch", parseInt(users.id) - 1);
          }
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[url("https://images7.alphacoders.com/133/1331311.png")] bg-no-repeat bg-cover'>
        <div className="h-[55vh] w-[25vw] flex flex-col bg-black/50 gap-4 text-white rounded-md shadow-xl items-center">
          <h1 className="text-2xl mt-3">Log in</h1>

          <label className="mr-28 " htmlFor="username">
            Username
          </label>
          <input
            className="rounded-sm bg-black/10 p-1"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label className="mr-28 " htmlFor="password">
            Password
          </label>
          <input
            className="rounded-sm bg-black/10 p-1"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-800 p-2 rounded-md text-white shadow-lg"
            onClick={handelSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
