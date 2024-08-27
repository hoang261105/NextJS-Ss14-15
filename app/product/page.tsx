"use client";
import React, { useEffect, useState } from "react";

export default function B5() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <p>Tên sản phẩm: {product.title}</p>
          <p>Giá: {product.price}</p>
          <p>Mô tả: {product.description}</p>
          <p>Danh mục: {product.category}</p>
          <p>Hình ảnh</p>
          <img src={product.image} alt="" width={200} />
        </div>
      ))}
    </div>
  );
}
