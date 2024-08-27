"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

async function getProducts(minPrice = 0, maxPrice = 100) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = response.data.filter(
      (product: any) => product.price >= minPrice && product.price <= maxPrice
    );
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function B2_B7() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("0"); // Giá trị mặc định là 0
  const [maxPrice, setMaxPrice] = useState("100"); // Giá trị mặc định là 100

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsData = await getProducts(Number(minPrice), Number(maxPrice));
    setProducts(productsData);
  };

  const handleFilter = () => {
    fetchProducts();
  };

  return (
    <div>
      <select
        name="minPrice"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      >
        <option value="0">0</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <select
        name="maxPrice"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      >
        <option value="100">100</option>
        <option value="110">110</option>
        <option value="120">120</option>
        <option value="130">130</option>
      </select>{" "}
      <button onClick={handleFilter}>Lọc sản phẩm</button>
      <br />
      <b>Danh sách sản phẩm</b>
      {products.map((product: any) => (
        <div key={product.id}>
          <p>Tên sản phẩm: {product.title}</p>
          <p>Giá: {product.price}</p>
          <p>Hình ảnh:</p>
          <img
            src={product.image}
            alt={product.title}
            width={200}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
