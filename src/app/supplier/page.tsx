"use client";

import React, { useState } from "react";
import SupplierTable from "./components/suppliertable";
import AddProductOverlay from "./components/addproductoverlay";
import { StaticImageData } from "next/image";

export type Product = {
  imageUrl: string | StaticImageData;
  productName: string;
  size: string;
  weight: number;
  finish: string;
  color: string;
  status: "Approved" | "Pending" | "Rejected";
};

export default function Supplier() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <div className="w-[80%] min-h-screen pt-15 sm:pt-25 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8">My Products</h1>
      <SupplierTable products={products} />
      <AddProductOverlay onSubmit={handleAddProduct} />
    </div>
  );
}
