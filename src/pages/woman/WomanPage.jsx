import React from "react";
import "../../assets/styles/pruebas.css";

const WomanPage = () => {
  return (
    <>
      {/* <nav className="grid grid-cols-2 gap-x-5 prueba"> */}
      {/* <nav className="prueba">
      
        <div className="bg-violet-200 p-4">
          <section>
            //TODO: SE PONER name="info" PARA QUE SOLO SE PUEDA DAR UN SOLO DETAILS
            <details>
              <summary className="">Categoría</summary>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Polos</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>Chaquetas</p>
              </div>
            </details>
          </section>
          <section>
            <details>
              <summary>Talla</summary>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>XS</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>S</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>M</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>L</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>XL</p>
              </div>
            </details>
          </section>
        </div> */}
      <nav className="max-w-[1100px] bg-blue-400">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-md:gap-2 mx-auto">
          <div class=" bg-white shadow-md hover:shadow-lg">
            <img
              class="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338576-302-385/1971824_2.jpg?v=638436321069130000"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                XIOMI
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Polo Mujer Ingrid Cocoasddddddddddd
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  S/ 74.93
                </p>
                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  S/ 99.90
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class=" bg-white shadow-md hover:shadow-lg">
            <img
              class="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                XIOMI
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  S/ 74.93
                </p>
                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  S/ 99.90
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class=" transform  bg-white shadow-md hover:shadow-lg">
            <img
              class="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                XIOMI
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  S/ 74.93
                </p>
                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  S/ 99.90
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
          <div class=" transform overflow-hidden bg-white shadow-md hover:shadow-lg">
            <img
              class="w-full object-cover object-center"
              src="https://topitop.vteximg.com.br/arquivos/ids/338612-302-385/1980908_2.jpg?v=638436321340000000"
              alt="Product Image"
            />
            <div class="p-4">
              <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                XIOMI
              </h2>
              <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                Polo Mujer Ingrid Coco
              </p>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  S/ 74.93
                </p>
                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                  S/ 99.90
                </p>
                <p class="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default WomanPage;
