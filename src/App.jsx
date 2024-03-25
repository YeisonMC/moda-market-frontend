import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import WomanPage from "./pages/woman/WomanPage.jsx";
import ManPage from "./pages/man/ManPage.jsx";
import KidsPage from "./pages/kids/KidsPage.jsx";
import ProductId from "./pages/ProductId";
import CreateProductForm from "./pages/admin/CreateProductForm";
import IconWhatsapp from "./assets/svg/whatsapp.svg";
import WomanPageId from "./pages/woman/WomanPageId.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import Shopping from "./pages/buy/Shopping.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 w-11/12 max-w-screen-2xl mx-auto">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductId />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/womanpageid" element={<WomanPageId />} />
          <Route
            path="/admin/createproductform"
            element={<CreateProductForm />}
          />

          {/* //TODO: SUB PAGINAS NAVEGACION */}

          <Route path="/womanpage" element={<WomanPage />} />
          <Route path="/manpage" element={<ManPage />} />
          <Route path="/kidspage" element={<KidsPage />} />
        </Routes>
      </div>
      <a
        href="https://wa.link/fwh97a"
        className="fixed w-[59px] h-[59px] leading-[40px] bottom-14 right-7 bg-[#0CBF4A] text-white rounded-full flex items-center justify-center z-10 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_5px_7px_-3px]"
      >
        <img className="h-11" src={IconWhatsapp} />
      </a>
      <Footer />
    </>
  );
};

export default App;
