import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Product } from "../page";
import { Icon } from "@iconify/react"; // Import Iconify component

const statusColorMap: Record<Product["status"], string> = {
  Approved: "bg-green-500",
  Pending: "bg-yellow-400",
  Rejected: "bg-red-500",
};

const SupplierTableItem: React.FC<
  Product & { deleteProduct: (productName: string) => void }
> = ({
  imageUrl,
  productName,
  size,
  weight,
  finish,
  color,
  status,
  deleteProduct,
}) => {
  return (
    <TableRow>
      <TableCell className="flex items-center gap-2">
        <Image src={imageUrl} alt="product image" width={100} height={100} />
        {productName}
      </TableCell>
      <TableCell>{size}</TableCell>
      <TableCell>{weight} lb</TableCell>
      <TableCell>{finish}</TableCell>
      <TableCell>{color}</TableCell>
      <TableCell
        className="whitespace-nowrap px-4 text-left"
        style={{ width: "1%" }}
      >
        <div
          className={`flex items-center justify-center text-white px-3 py-1 rounded-full text-sm font-medium ${statusColorMap[status]}`}
        >
          {status}
        </div>
      </TableCell>
      <TableCell>
        {status === "Pending" && (
          <div className="flex flex-col items-center gap-2">
            <button className="bg-blue-500 text-white p-2 rounded-full text-sm">
              <Icon icon="mdi:pencil-outline" width={20} height={20} />
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-full text-sm"
              onClick={() => deleteProduct(productName)}
            >
              <Icon icon="mdi:trash-can-outline" width={20} height={20} />
            </button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default SupplierTableItem;
