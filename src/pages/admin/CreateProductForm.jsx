import React, { useState } from "react";
import axios from "axios";
import { LabelForm } from "../../components/iu/LabelForm";
import { InputForm } from "../../components/iu/InputForm";

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    marca: "",
    precio: 0,
    promociones: 0,
    talla: "",
    color: "",
    imagen: "",
    categoria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://moda-market-production.up.railway.app/modamarket/store/create",
        formData
      );
      alert("Producto creado exitosamente");
      // Limpiar el formulario después de enviar la solicitud
      setFormData({
        nombre: "",
        descripcion: "",
        marca: "",
        precio: 0,
        promociones: 0,
        talla: "",
        color: "",
        imagen: "",
        categoria: "",
      });
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Hubo un error al crear el producto");
    }
  };

  return (
    <>
      <div className="mt-20 w-11/12 max-w-screen-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 rounded-xl px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto"
        >
          <LabelForm htmlFor="nombre">Nombre</LabelForm>
          <InputForm
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <LabelForm htmlFor="descripcion">Descripción</LabelForm>
          <InputForm
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
          />
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            placeholder="Marca"
          />
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Precio"
          />
          <input
            type="number"
            name="promociones"
            value={formData.promociones}
            onChange={handleChange}
            placeholder="promociones"
          />

          <input
            type="text"
            name="talla"
            value={formData.talla}
            onChange={handleChange}
            placeholder="Talla"
          />
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
          />
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="URL de la imagen"
          />
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Categoría"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 mt-4 rounded-xl"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProductForm;
