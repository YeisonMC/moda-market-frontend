import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductId = () => {
  const { productName } = useParams(); // Obtener el nombre del producto de los parámetros de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Hacer una solicitud para obtener los detalles del producto por su nombre
    axios
      .get(
        `https://moda-market-production.up.railway.app/modamarket/store/home/get/${productName}`
      )
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productName]);

  // Verificar si aún no se han cargado los datos del producto
  if (!product) {
    return <div>Cargando...</div>;
  }

  // Mostrar el nombre e imagen del producto
  return (
    <div className="mt-20">
      <h1>{product.nombre}</h1>
      <img src={product.imagen} alt={product.nombre} />
    </div>
  );
};

export default ProductId;
