import React from "react";
import { useHistory } from "react-router-dom";
import HeartActive from "../assets/icon/heartActive.svg";

function Header() {
  const navigation = useHistory();
  return (
    <div className="w-full h-36 flex justify-between items-center bg-black px-36">
      <h1
        className="font-bold text-2xl text-white"
        onClick={() => navigation.push("/")}
      >
        Image Share
      </h1>
      <div className="flex">
        <input className="w-48 h-8 rounded-md" />
        <div
          className="ml-4 flex items-center"
          onClick={() => navigation.push("/favorite")}
        >
          <img src={HeartActive} alt="favorite" />
          <h1 className="text-white text-lg">Favorite</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
