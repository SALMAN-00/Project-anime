import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favoret, setFavoret] = useState([]);
  const [read, setRead] = useState([]);
  localStorage.setItem("isLogin", false);

  const navg = useNavigate("");
  const handelSubmit = () => {
    if (username === "" || email === "" || password === "") {
      alert("Inputs is empty");
    } else if (!username.match(/^[a-zA-Z0-9]{5,25}$/)) {
      alert("username should be more the 4 char");
    } else if (
      !email.match(/^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/)
    ) {
      alert("Invalid email");
    } else if (!password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/)) {
      alert(
        "Invalid Password should be 6 contain at least one characters and one number"
      );
    } else {
      axios
        .post("https://655273ad5c69a779032a0b90.mockapi.io/Signup", {
          username: username,
          email: email,
          password: password,
          Read: read,
        })
        .then(res => {
          localStorage.setItem("UserId", res.data.id);
          navg(`/login`);
        });
    }
  };
  return (
    <>
      {" "}
      <NavBar />
      <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[url("https://images7.alphacoders.com/133/1331311.png")] bg-no-repeat bg-cover'>
        <div className="h-[60vh] w-[30vw] flex flex-col bg-black/50 gap-3 text-white rounded-md shadow-xl items-center">
          <h1 className="text-2xl mt-3">Sign up</h1>

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

          <label className="mr-28 " htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm bg-black/10 p-1"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
