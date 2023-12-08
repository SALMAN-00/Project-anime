import React, { useState } from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Foot from "../components/Foot";
export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  return (
    <>
      <NavBar />
      <div className="bg-black/20 ">
        {isLogin ? (
          <div>
            <Cards />
          </div>
        ) : (
          <div className=' h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[url("https://images7.alphacoders.com/599/599379.jpg")] text-white'>
            <div className="shadow-lg rounded-lg h-60 w-96 bg-black/50 text-center flex flex-col justify-center items-center ">
              <h1 className="text-4xl font-thin ">Wellcome to Anime Time </h1>
              <p className="mt-10 ">
                Enjoy watching the best anime collection you like{" "}
              </p>
              <ul className="flex gap-10 mt-10">
                <Link to="/login">
                  {" "}
                  <p className="p-2 bg-blue-700 text-white rounded-md shadow-md">
                    Log in
                  </p>{" "}
                </Link>
                <Link to="/signup">
                  <p className="p-2 bg-blue-700 text-white rounded-md shadow-md">
                    Sign up
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Foot />
    </>
  );
}
