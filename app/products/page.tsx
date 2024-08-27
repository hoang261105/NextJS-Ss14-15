import React from "react";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

export default async function B2() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <b>Danh sách sản phẩm</b>
      {products.map((product: any) => (
        <div key={product.id}>
          <p>Tên sản phẩm: {product.title}</p>
          <p>Giá: {product.price}</p>
          <p>Hình ảnh:</p>
          <img src={product.image} alt="" width={200} height={100} />
        </div>
      ))}
    </div>
  );
}
