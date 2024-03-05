import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/styles/pruebas.css";
import ChevronDown from "../assets/svg/chevron-down.svg";
import HomeProductGet from "../hooks/HomeProductGet.jsx";

const ProductId = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  // console.log(product);

  const [ClickLabel, setClickLabel] = useState(false);

  const ClickLabelBgColor = () => {
    setClickLabel(!ClickLabel);
  };

  useEffect(() => {
    axios
      .get(
        `https://moda-market-production.up.railway.app/modamarket/store/home/get/${productId}`
      )
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productId]);

  if (!product) {
    return <div className="bg-blue-300 mt-20">Cargando...</div>;
  }

  return (
    <div className="mt-10 w-11/12 max-w-screen-xl mx-auto">
      <div className="grid-prueba justify-between max-lg:grid-cols-1">
        <img
          className=" object-cover"
          src={product.imagen}
          alt={product.nombre}
        />
        <div className="max-lg:mt-6 max-lg:px-0">
          <span className="uppercase">{product.marca}</span>
          <h1 className="text-2xl font-semibold mt-6">{product.nombre}</h1>
          <div className="mt-4 mb-2">
            <span className="line-through text-[#8D8D8D] text-lg">
              S/. {product.precio}
            </span>
            <p className="text-2xl mt-1 font-semibold text-[#e54246]">
              S/. {product.promociones}
            </p>
          </div>
          <hr />
          <div className="mt-4">
            <p className="text-xl">Talla</p>
            <div className="mt-2 mb-6">
              <input className="hidden" type="radio" />
              <button
                name="boton"
                id="jiija"
                onClick={ClickLabelBgColor}
                className={`mr-2 w-14 h-14 border border-[#C6C6C6] rounded-lg cursor-pointer  hover:bg-black hover:text-white ${
                  ClickLabel ? "prueba-open" : ""
                }`}
              >
                XL
              </button>
              <input className="hidden" type="radio" />
              <button
                name="boton"
                id="jiija"
                onClick={ClickLabelBgColor}
                className={`mr-2 w-14 h-14 border border-[#C6C6C6] rounded-lg cursor-pointer  hover:bg-black hover:text-white ${
                  ClickLabel ? "prueba-open" : ""
                }`}
              >
                L
              </button>
              <input className="hidden" type="radio" />
              <button
                name="boton"
                id="jiija"
                onClick={ClickLabelBgColor}
                className={`mr-2 w-14 h-14 border border-[#C6C6C6] rounded-lg cursor-pointer  hover:bg-black hover:text-white ${
                  ClickLabel ? "prueba-open" : ""
                }`}
              >
                S
              </button>
            </div>
          </div>

          <div className="flex bg-[#e54246] text-white cursor-pointer w-full justify-center items-center rounded-lg py-3 gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            <button>Comprar</button>
          </div>

          <div className="mt-8">
            <details className="">
              <summary className="py-2 flex justify-between">
                <p className="font-semibold text-lg">Descripción</p>
                <img src={ChevronDown} alt="" className="w-6 h-6" />
              </summary>
              <div className="flex gap-2 items-center">
                <p>{product.descripcion}</p>
              </div>
            </details>
            <hr className="my-3" />
            <details className="">
              <summary className="py-2 flex justify-between">
                <p className="font-semibold text-lg">Características</p>
                <img src={ChevronDown} alt="" className="w-6 h-6" />
              </summary>
              <div className="flex gap-2 items-center">
                <p>
                  Moda Market ha diseñado prendas para pasar esta temporada con
                  moda y estilo de la marca Xiomia. Renueva tu guardarropa con
                  estos Polos Mujer en el color de tu preferencia y combínalos
                  para armar tu look perfecto
                </p>
              </div>
            </details>
            <hr className="my-3" />
            <details className="">
              <summary className="py-2 flex justify-between">
                <p className="font-semibold text-lg">Material</p>
                <img src={ChevronDown} alt="" className="w-6 h-6" />
              </summary>
              <div className="flex gap-2 items-center">
                <p>
                  Moda Market ha diseñado prendas para pasar esta temporada con
                  moda y estilo de la marca Xiomia. Renueva tu guardarropa con
                  estos Polos Mujer en el color de tu preferencia y combínalos
                  para armar tu look perfecto
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>

      <HomeProductGet />

      {/* <div className="grid-prueba">
        
        <div className="bg-violet-500">
          <img src={product.imagen} alt={product.nombre} />
        </div>
        <div className="p-4 bg-blue-300">
          <h1 className="text-xl font-semibold">{product.nombre}</h1>
          <p className="text-base">{product.descripcion}</p>
          <p className="text-sm">S/.{product.precio}</p>
          <div className="border-2 border-gray-500 inline-block py-1 px-2 mt-2 hover:bg-slate-400 hover:text-white ">
            <p className="text-xl cursor-pointer">{product.talla}</p>
          </div>

          <div className="flex bg-black text-white xl:w-32 justify-center items-center rounded-lg py-3 gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>

            <button>Comprar</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductId;
