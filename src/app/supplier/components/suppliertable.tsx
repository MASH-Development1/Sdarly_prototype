import React, { useState } from "react";
import SupplierTableItem from "./suppliertableitem";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "../page"; // adjust import as needed
import {
  green_paper,
  ivory_paper,
  white_paper,
} from "../../../../public/assets";

type SupplierTableProps = {
  products: Product[];
};

export default function SupplierTable({ products }: SupplierTableProps) {
  // State for managing products
  const [productList, setProductList] = useState<Product[]>([
    {
      imageUrl: ivory_paper,
      productName: "Exact Vellum Bristol Paper",
      size: "8 1/2 x 14",
      weight: 67,
      finish: "Uncoated Vellum",
      color: "Ivory",
      status: "Approved",
    },
    {
      imageUrl: white_paper,
      productName: "EarthChoice Office Paper",
      size: "8 1/2 x 11",
      weight: 20,
      finish: "Uncoated Smooth",
      color: "White",
      status: "Rejected",
    },
    {
      imageUrl: green_paper,
      productName: "Astrobrights Gamma Paper",
      size: "8 1/2 x 11",
      weight: 60,
      finish: "Uncoated Smooth",
      color: "Green",
      status: "Pending",
    },
    ...products, // Append passed products
  ]);

  const deleteProduct = (productName: string) => {
    setProductList((prevProducts) =>
      prevProducts.filter((product) => product.productName !== productName)
    );
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
      <Table>
        <TableCaption>A list of your recent uploads.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead>Product Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Finish</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productList.map((product, idx) => (
            <SupplierTableItem
              key={idx}
              {...product}
              deleteProduct={deleteProduct} // Pass deleteProduct function to each item
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
