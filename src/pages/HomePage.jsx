import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../assets/styles/home.css";

const HomePage = () => {
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
      {/* <div className="w-11/12 max-w-screen-2xl mx-auto bg-violet-400">
          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-6">
            {store.map((store) => (
              <div className="max-w-64 max-md:max-w-56" key={store.id}>
                <div class="rounded shadow-lg">
                  <div className="w-full h-72 max-md:h-56">
                    <img
                      class="w-full h-full"
                      src={store.imagen}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{store.nombre}</div>
                    <p class="text-gray-700 text-dispers">{store.descripcion}</p>
                  </div>
                  <div class="px-6 pt-2 pb-4 flex ">
                    <a
                      href="#"
                      className="bg-black text-white rounded-lg py-2 text-center w-full"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-screen">adsa</div>
        </div> */}

      <div className="mt-16 w-11/12 max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl">La Colección De La Semana</h1>
          <p className="mt-4 md:w-7/12 mx-auto">
            Descubre los artículos y prendas más relevantes que hemos
            seleccionado para ti esta semana. Una cuidada colección con lo
            último en moda y las tendencias del momento.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 max-md:bg-fuchsia-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto sm:max-w-xl lg:max-w-3xl xl:max-w-5xl">
          {store.map((store) => (
            // target="_blank"
            <Link to={`/product/${store.id}`} key={store.id}>
              <div className="bg-white shadow rounded overflow-hidden ">
                <div className="">
                  <img
                    className="w-full"
                    src={store.imagen}
                    alt={store.nombre}
                  />
                </div>
                {/* <div className="w-[248px] h-auto mx-auto">
                    <img
                      className="w-full"
                      src={product.imagen}
                      alt={product.nombre}
                    />
                  </div> */}
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{store.nombre}</h3>
                  <p className="text-gray-500 text-sm text-dispers">
                    {store.descripcion}
                  </p>
                  <p className="font-bold mt-2">{store.precio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
