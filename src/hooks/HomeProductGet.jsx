import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import "../assets/styles/home.css";

const HomeProductGet = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://moda-market-production.up.railway.app/modamarket/store/home"
      )
      .then((response) => setStore(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* <h1> {store.length}</h1> */}
      <div className="mt-10">
        <p className="text-2xl font-semibold ">Tambien te pueden gustar:</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
          {store.map((store) => (
            // target="_blank"
            <Link to={`/product/${store.id}`} key={store.id}>
              <div className="bg-white shadow overflow-hidden">
                <img
                  className="w-full "
                  src={store.imagen}
                  alt={store.nombre}
                />
                <div className="p-4">
                  <h2 className="mb-2 text-sm font-medium text-gray-500 uppercase text-dispers-title">
                    {store.marca}
                  </h2>
                  <p className="font-bold text-xl mb-2">{store.nombre}</p>
                  <p className="text-gray-500 text-sm text-dispers">
                    {store.descripcion}
                  </p>
                  {/* <p className="font-bold mt-2">{store.precio}</p> */}
                  <div className="flex items-center mt-3">
                    <p className="mr-2 text-lg font-semibold text-gray-900  max-md:text-base">
                      S/. {store.precio}
                    </p>
                    <p className="text-base font-medium text-gray-500 line-through  max-md:text-base">
                      S/. {store.promociones}
                    </p>

                    <p className="ml-auto text-base font-medium text-green-500 max-md:text-base">
                      20% off
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeProductGet;
