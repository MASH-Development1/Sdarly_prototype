import React, { useState } from "react";
import SupplierTableItem from "./suppliertableitem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "../page"; // adjust import as needed

type SupplierTableProps = {
  products: Product[];
  deleteProduct: (id: string) => void;
};

export default function SupplierTable({
  products,
  deleteProduct,
}: SupplierTableProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead>Product Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Finish</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <SupplierTableItem
              key={product.id}
              {...product}
              deleteProduct={deleteProduct}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
