import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/home.css";
import HomeProductGet from "../../hooks/HomeProductGet";
import Skeleton from "../woman/Skeleton";
import BannerSwiper from "./components/BannerSwiper";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/modamarket/store/home"
        // "https://moda-market-production.up.railway.app/modamarket/store/home"
      )
      .then((response) => setStore(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="pt-4 ">
        <BannerSwiper />
      </div>
      <div className="pt-6">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl">La Colección De La Semana</h1>
          <p className="mt-4 md:w-7/12 mx-auto">
            Descubre los artículos y prendas más relevantes que hemos
            seleccionado para ti esta semana. Una cuidada colección con lo
            último en moda y las tendencias del momento.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto sm:max-w-xl lg:max-w-3xl xl:max-w-5xl">
          {store.map((store) => (
            <div key={store.id}>
              {loading ? (
                <Skeleton />
              ) : (
                <Link
                  to={`/product/${store.id}`}
                  // key={store.id}
                  // className="flex-1"
                >
                  <div className="bg-white shadow overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      <img
                        className="w-full"
                        src={store.imagen}
                        alt={store.nombre}
                      />
                      <div className="px-4 py-2">
                        <h3 className="font-bold text-xl">{store.nombre}</h3>
                      </div>
                    </div>
                    <div className="px-4 mb-4">
                      <p className="text-gray-500 text-sm text-dispers">
                        {store.descripcion}
                      </p>
                      <p className="font-bold mt-2">S/. {store.precio}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="">{loading ? <Skeleton /> : <HomeProductGet />}</div> */}
    </>
  );
};

export default HomePage;
