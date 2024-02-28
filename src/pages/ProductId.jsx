import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  // console.log(product);

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
    <div className="mt-20 w-11/12 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="">
          <img src={product.imagen} alt={product.nombre} />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold">{product.nombre}</h1>
          <p className="text-base">{product.descripcion}</p>
          <p className="text-sm">S/.{product.precio}</p>
          {/* <p>{product.promociones}</p> */}
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
      </div>
    </div>
  );
};

export default ProductId;
