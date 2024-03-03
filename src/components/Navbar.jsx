import React, { useState } from "react";
import "../assets/styles/navbar.css";
import { NavLink } from "react-router-dom";
import ModaMarket from "../assets//svg/ModaMarket.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="flex items-center justify-between mx-10 py-4 max-md:mx-4">
          <NavLink to="/">
            <img src={ModaMarket} alt="" />
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

          <ul className="flex items-center gap-10 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-white max-md:block">
            <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="/womanpage" className="text-black">
                Mujer
              </NavLink>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              {/*onClick={toggleMenu}*/}
              <NavLink to={"/manpage"} className="text-black">
                Hombre
              </NavLink>
              {/* <div className={`menu-expanded  ${menuOpen ? "show" : ""}`}>
                <div className="p-10">
                  <ul className="xd">
                    <li>
                      <a href="">Polos</a>
                    </li>
                    <li>
                      <a href="">Pantalones</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </li>

            <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="/kidspage" className="text-black">
                Niños
              </NavLink>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="#" className="text-black">
                Promociones
              </NavLink>
            </li>
            <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="#" className="text-black">
                Contacto
              </NavLink>
            </li>
            <div className="flex leading-7 items-center relative max-w-[190px]">
              <svg
                className="icon absolute left-4 fill-[#9e9ea7] w-5 h-5"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              {/*h10*/}
              <input
                type="search"
                className="input w-full h-10 leading-7 py-0 px-4 pl-11 rounded-lg outline-none bg-[#f3f3f4] text-[#0d0c22] text-sm"
                placeholder="Buscar productos.."
              />
            </div>
            <li className="max-md:mx-4 max-md:my-2 flex gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </li>

            {/* <li className="max-md:mx-4 max-md:my-2">
              <NavLink to="/admin/createproductform" className="text-black">
                Crear
              </NavLink>
            </li> */}
            {/* <li className="max-md:mx-4 max-md:my-2">
              <NavLink
                to="https://moda-market-production.up.railway.app/modamarket/store/home/"
                className="text-black"
              >
                API product
              </NavLink>
            </li> */}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
