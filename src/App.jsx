import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductId from "./pages/ProductId";
import CreateProductForm from "./pages/admin/CreateProductForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:productName" element={<ProductId />} />
        <Route
          path="/admin/createproductform"
          element={<CreateProductForm />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
