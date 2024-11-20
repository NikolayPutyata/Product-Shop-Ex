import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const favoriteListFromStorage = JSON.parse(
      localStorage.getItem("favorite")
    );
    favoriteListFromStorage
      ? setFavoriteList([...favoriteListFromStorage])
      : setFavoriteList([]);
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-center my-4">Your Favorite</h2>
      <ul className="flex flex-wrap gap-6 justify-center">
        {favoriteList?.map((item) => (
          <li key={item.id}>
            <div className="card bg-base-100 h-40 w-40 shadow-xl transform transition duration-200 hover:scale-105">
              <Link to={`/products/${item.id}`}>
                <figure>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-t-lg"
                  />
                </figure>
                <div className="flex flex-col p-2 items-center">
                  <p className="text-center hidden lg:block">{item.title}</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
