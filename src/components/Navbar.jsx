import React, { useState } from "react";
import "../assets/styles/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* <header className="absolute top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="flex items-center justify-between mx-10  py-4 max-md:mx-4">
          <a href="">
            <p className="text-xl">Moda Market</p>
          </a>

          <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="icons">
            <div
              className={`menu_btn flex flex-col cursor-pointer gap-2 ${
                menuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="line top_line"></span>
              <span className="line middle_line"></span>
              <span className="line bottom_line"></span>
            </div>
          </label>

          <ul className="flex gap-10 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-white max-md:block">
            <li className="max-md:mx-4 max-md:my-2">
              <a href="" className="text-xl">
                Mujer
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="" className="text-xl">
                Hombre
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="" className="text-xl">
                Bebé
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="" className="text-xl">
                Niños
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="" className="text-xl">
                Sport
              </a>
            </li>
          </ul>
        </div>
      </header> */}

      <header className="absolute top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="flex items-center justify-between mx-10 py-4 max-md:mx-4">
          <NavLink to="/">
            <h1 className="text-black text-xl">Moda Market</h1>
          </NavLink>

          <input type="checkbox" id="check" className="hidden" />
          <label htmlFor="check" className="icons">
            <div
              className={`menu_btn flex flex-col cursor-pointer gap-2 ${
                menuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="line top_line"></span>
              <span className="line middle_line"></span>
              <span className="line bottom_line"></span>
            </div>
          </label>

          <ul className="flex gap-10 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-white max-md:block">
            <li className="max-md:mx-4 max-md:my-2">
              <a href="/" className="text-black">
                Inicio
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="/pages/home" className="text-black">
                Tienda
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="#" className="text-black">
                Ofertas
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="#" className="text-black">
                Novedades
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <a href="#" className="text-black">
                Contacto
              </a>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="/admin/createproductform" className="text-black">
                Crear
              </NavLink>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <NavLink
                to="https://moda-market-production.up.railway.app/modamarket/store/home/"
                className="text-black"
              >
                API product
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
