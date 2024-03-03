import React, { useState } from "react";
import "../../assets/styles/pruebas.css";
import Checked from "./components/filters/Checked";
import ChevronDown from "../../assets/svg/chevron-down.svg";
import ReactImageMagnify from "react-image-magnify";

const WomanPageId = () => {
  const [ClickLabel, setClickLabel] = useState(false);

  const ClickLabelBgColor = () => {
    setClickLabel(!ClickLabel);
  };

  return (
    <>
      <div className="mt-10 w-11/12 max-w-screen-xl mx-auto">
        {/* //!  p-4 xl:bg-blue-400 lg:bg-violet-200  sm:bg-red-500 bg-orange-400 APRENDER ESO QUE SON LOS TAMAÑOS */}

        <div className="grid-prueba justify-between max-lg:grid-cols-1">
          <div className="md:w-1/2  lg:w-11/12 xl:w-full max-lg:mx-auto">
            {/* <img src="https://topitop.vteximg.com.br/arquivos/ids/338576-302-385/1971824_2.jpg?v=638436321069130000" /> */}
            <img
              className=" object-cover"
              src="https://topitop.vteximg.com.br/arquivos/ids/338575-1000-1248/1971824_1.jpg?v=638436321061030000"
            />
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,

                  src: "https://topitop.vteximg.com.br/arquivos/ids/338575-1000-1248/1971824_1.jpg?v=638436321061030000",
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: "https://topitop.vteximg.com.br/arquivos/ids/338575-1000-1248/1971824_1.jpg?v=638436321061030000",
                  width: 50,
                  height: 50,
                },
                // isHintEnabled: true,
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
              }}
            /> */}
          </div>
          <div className="max-lg:mt-6 max-lg:px-0">
            <span className="uppercase">Marca</span>
            <h1 className="text-2xl font-semibold mt-6">
              Polo Mujer Ingrid Coco
            </h1>
            {/* <p className="text-base mt-2">
              Topitop ha diseñado prendas para pasar esta temporada con moda y
              estilo de la marca Xiomi. Renueva tu guardarropa con estos Polos
              Mujer en el color de tu preferencia y combínalos para armar tu
              look perfecto
            </p> */}
            <div className="mt-4 mb-2">
              <span className="line-through text-[#8D8D8D] text-lg">
                S./ 98.99
              </span>
              <p className="text-2xl mt-1 font-semibold text-[#e54246]">
                S/.74.93
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
                  <p>
                    Moda Market ha diseñado prendas para pasar esta temporada
                    con moda y estilo de la marca Xiomia. Renueva tu guardarropa
                    con estos Polos Mujer en el color de tu preferencia y
                    combínalos para armar tu look perfecto
                  </p>
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
                    Moda Market ha diseñado prendas para pasar esta temporada
                    con moda y estilo de la marca Xiomia. Renueva tu guardarropa
                    con estos Polos Mujer en el color de tu preferencia y
                    combínalos para armar tu look perfecto
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
                    Moda Market ha diseñado prendas para pasar esta temporada
                    con moda y estilo de la marca Xiomia. Renueva tu guardarropa
                    con estos Polos Mujer en el color de tu preferencia y
                    combínalos para armar tu look perfecto
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomanPageId;
