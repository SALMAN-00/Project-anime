import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cards() {
  const [anime, setAnime] = useState([]);
  const [UserInfo, setUserInfo] = useState([]);
  //https://api.jikan.moe/v4/anime?q=jujutsu%20kaisen&sfw
  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime").then(response => {
      setAnime(response.data.data);
    });
  }, []);
  let Userid = localStorage.getItem("UserId");
  const handelWatched = (id, Userid) => {
    axios.get(`https://api.jikan.moe/v4/top/anime`).then(response => {
      console.log(response.data.data[id]);
      axios.put(
        `https://655273ad5c69a779032a0b90.mockapi.io/Signup/${Userid}`,
        {
          Read: { imeg: response.data.data[id].images.jpg.image_url },
        }
      );
    });
  };

  // const handelFavourite = id => {
  //   localStorage.setItem("Favourite", id);
  // };

  return (
    <div className="  gap-2 justify-start items-center flex flex-col">
      <div className="flex gap-5 justify-center items-center">
        <input
          type="search"
          placeholder="Search"
          className="p-1 px-10 mt-5 rounded-lg"
        />
        <button className=" p-2 mt-5 bg-slate-500 rounded-md">Search</button>
      </div>

      <div className=" grid grid-cols-5  gap-5  rounded-md justify-start items-start">
        {anime.map(item => {
          return (
            <div
              key={item.rank}
              className="h-96 w-52 bg-white/5 text-white text-center "
            >
              <img
                className="rounded-md"
                src={item.images.jpg.image_url}
                alt=""
              />
              <p>{item.title}</p>
              <ul className="flex justify-center items-center justify-between">
                <button className="p-1 bg-white text-black rounded-md">
                  Favourite
                </button>
                <button
                  onClick={() => {
                    handelWatched(item.rank, Userid);
                  }}
                  className="p-1 bg-white text-black rounded-md"
                >
                  Watched
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
