import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import { AppContext } from "../context/appContext";

function Detailpage() {
  const { id } = useParams();
  const [isLoading, data] = useContext(AppContext);

  const [detail, setDetail] = useState({});

  console.log("detail", data);
  useEffect(() => {
    setDetail(data[id]);
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <Header />
      {!data ? (
        <div>
          <h1>data belum tampil</h1>
        </div>
      ) : (
        <div className="w-8/12 m-auto flex justify-between my-10">
          <img
            src={detail.url}
            alt={detail.title}
            style={{
              width: 600,
              height: 600,
            }}
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg">{detail.title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detailpage;
