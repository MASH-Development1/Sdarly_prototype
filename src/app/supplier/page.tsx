"use client";

import React, { useState } from "react";
import SupplierTable from "./components/suppliertable";
import AddProductOverlay from "./components/addproductoverlay";
import { StaticImageData } from "next/image";
import { ivory_paper, white_paper, green_paper } from "../../../public/assets";
import { v4 as uuidv4 } from "uuid";

export type Product = {
  id: string;
  imageUrl: string | StaticImageData;
  productName: string;
  size: string;
  weight: number;
  finish: string;
  color: string;
  status: "Approved" | "Pending" | "Rejected";
};

export default function Supplier() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: uuidv4(),
      imageUrl: ivory_paper,
      productName: "Exact Vellum Bristol Paper",
      size: "8 1/2 x 14",
      weight: 67,
      finish: "Uncoated Vellum",
      color: "Ivory",
      status: "Approved",
    },
    {
      id: uuidv4(),
      imageUrl: white_paper,
      productName: "EarthChoice Office Paper",
      size: "8 1/2 x 11",
      weight: 20,
      finish: "Uncoated Smooth",
      color: "White",
      status: "Rejected",
    },
    {
      id: uuidv4(),
      imageUrl: green_paper,
      productName: "Astrobrights Gamma Paper",
      size: "8 1/2 x 11",
      weight: 60,
      finish: "Uncoated Smooth",
      color: "Green",
      status: "Pending",
    },
  ]);

  const handleAddProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="w-[80%] min-h-screen pt-15 sm:pt-25 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8">My Products</h1>
      <SupplierTable products={products} deleteProduct={handleDeleteProduct} />
      <AddProductOverlay onSubmit={handleAddProduct} />
    </div>
  );
}
