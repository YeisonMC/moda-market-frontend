import React from "react";
import "../../assets/styles/pruebas.css";
import Checked from "./components/filters/Checked";
import Summary from "./components/filters/Summary";
import ChevronDown from "../../assets/svg/chevron-down.svg";

const WomanPage = () => {
  return (
    <>
      {/* //!  p-4 xl:bg-blue-400 lg:bg-violet-200  sm:bg-red-500 bg-orange-400 APRENDER ESO QUE SON LOS TAMAÑOS */}
      <nav className="prueba max-lg:flex max-lg:flex-col pt-8">
        <div className="px-4 py-2  max-md:px-0 max-md:mb-4 xl:bg-white lg:bg-white0  sm:bg-white bg-white">
          {/* //TODO: SE PONER name="info" PARA QUE SOLO SE PUEDA DAR UN SOLO DETAILS*/}

          <details>
            <summary className="py-2 flex justify-between">
              <p>Categoría</p>
              <img src={ChevronDown} alt="" className="w-6 h-6" />
            </summary>
            <div className="flex gap-2 items-center">
              <Checked />
              <p>Polos</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <Checked />
              <p>Chaquetas</p>
            </div>
          </details>

          <hr className="" />

          <details>
            <summary className="py-2 flex justify-between">
              <p>Talla</p>
              <img src={ChevronDown} alt="" className="w-6 h-6" />
            </summary>

            <div className="flex gap-2 items-center">
              {/* <input type="checkbox" className="pruebas-box checked" /> */}
              <Checked />
              <p>XS</p>
            </div>
            <div className="flex gap-2 items-center">
              <Checked />
              <p>S</p>
            </div>
            <div className="flex gap-2 items-center">
              <Checked />
              <p>M</p>
            </div>
            <div className="flex gap-2 items-center">
              <Checked />
              <p>L</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <Checked />
              <p>XL</p>
            </div>
          </details>

          <hr className="" />
        </div>
        <nav className="mx-auto">
          <h1 className="text-xl mb-2 font-semibold">100 productos</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-md:gap-2 mx-auto">
            <div className=" bg-white shadow-md hover:shadow-lg">
              <img
                className="w-full object-cover object-center"
                src="https://topitop.vteximg.com.br/arquivos/ids/338576-302-385/1971824_2.jpg?v=638436321069130000"
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                  XIOMI
                </h2>
                <p className="mb-2 text-base text-gray-700">
                  Polo Mujer Ingrid Cocoasddddddddddd
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900  max-md:text-base">
                    S/ 74.93
                  </p>
                  <p className="text-base font-medium text-gray-500 line-through  max-md:text-base">
                    S/ 99.90
                  </p>

                  <p className="ml-auto text-base font-medium text-green-500 max-md:text-base">
                    20% off
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white shadow-md hover:shadow-lg">
              <img
                className="w-full object-cover object-center"
                src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium  text-gray-900">
                  XIOMI
                </h2>
                <p className="mb-2 text-base  text-gray-700">
                  Polo Mujer Ingrid Coco
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 ">
                    S/ 74.93
                  </p>
                  <p className="text-base font-medium text-gray-500 line-through ">
                    S/ 99.90
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
            <div className=" transform  bg-white shadow-md hover:shadow-lg">
              <img
                className="w-full object-cover object-center"
                src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium  text-gray-900">
                  XIOMI
                </h2>
                <p className="mb-2 text-base  text-gray-700">
                  Polo Mujer Ingrid Coco
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 ">
                    S/ 74.93
                  </p>
                  <p className="text-base font-medium text-gray-500 line-through ">
                    S/ 99.90
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
            <div className=" transform overflow-hidden bg-white shadow-md hover:shadow-lg">
              <img
                className="w-full object-cover object-center"
                src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium  text-gray-900">
                  XIOMI
                </h2>
                <p className="mb-2 text-base  text-gray-700">
                  Polo Mujer Ingrid Coco
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 ">
                    S/ 74.93
                  </p>
                  <p className="text-base font-medium text-gray-500 line-through ">
                    S/ 99.90
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      <br />
      {/* <nav className="max-w-[1100px] bg-blue-400 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-md:gap-2 mx-auto ">
          <div className=" bg-white shadow-md hover:shadow-lg">
            <img
              className="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338576-302-385/1971824_2.jpg?v=638436321069130000"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium  text-gray-900">
                XIOMI
              </h2>
              <p className="mb-2 text-base  text-gray-700">
                Polo Mujer Ingrid Cocoasddddddddddd
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 ">
                  S/ 74.93
                </p>
                <p className="text-base font-medium text-gray-500 line-through ">
                  S/ 99.90
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-md hover:shadow-lg">
            <img
              className="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium  text-gray-900">
                XIOMI
              </h2>
              <p className="mb-2 text-base  text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 ">
                  S/ 74.93
                </p>
                <p className="text-base font-medium text-gray-500 line-through ">
                  S/ 99.90
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div className=" transform  bg-white shadow-md hover:shadow-lg">
            <img
              className="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium  text-gray-900">
                XIOMI
              </h2>
              <p className="mb-2 text-base  text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 ">
                  S/ 74.93
                </p>
                <p className="text-base font-medium text-gray-500 line-through ">
                  S/ 99.90
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div className=" transform overflow-hidden bg-white shadow-md hover:shadow-lg">
            <img
              className="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium  text-gray-900">
                XIOMI
              </h2>
              <p className="mb-2 text-base  text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 ">
                  S/ 74.93
                </p>
                <p className="text-base font-medium text-gray-500 line-through ">
                  S/ 99.90
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default WomanPage;
