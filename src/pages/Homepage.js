import axios from "axios";
import { useContext } from "react";
import { Header, ImageCard } from "../components";
import { AppContext } from "../context/appContext";

function Homepage() {
  const [isLoading, data, setData] = useContext(AppContext);

  const onFavorite = (id) => {
    const findData = data.find((item) => item.id === id);
    const filterData = data.filter((item) => item.id !== id);
    const newData = [
      ...filterData,
      { ...findData, favorite: findData.favorite ? false : true },
    ];
    setData(newData);
  };

  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className="w-8/12 m-auto flex flex-wrap justify-between">
        {isLoading ? (
          <div className="w-full h-full">
            <h1>Loading...</h1>
          </div>
        ) : !data ? (
          <div>
            <h1>data tidak ada</h1>
          </div>
        ) : (
          <>
            {data.map((data) => (
              <ImageCard data={data} onFavorite={onFavorite} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Homepage;
