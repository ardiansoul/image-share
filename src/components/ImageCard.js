import React from "react";
import { useHistory } from "react-router-dom";
import Heart from "../assets/icon/heart.svg";
import HeartActive from "../assets/icon/heartActive.svg";

function ImageCard({ data, onFavorite }) {
  const navigation = useHistory();

  return (
    <div
      style={{
        width: "150px",
      }}
      className="m-4 relative"
    >
      <img
        src={data.favorite ? HeartActive : Heart}
        alt="heart"
        className={"absolute"}
        style={{
          top: 10,
          right: 10,
        }}
        onClick={() => onFavorite(data.id)}
      />
      <img
        src={data.thumbnailUrl}
        alt={data.title}
        onClick={() => navigation.push(`detail/${data.id}`)}
      />
    </div>
  );
}

export default ImageCard;
