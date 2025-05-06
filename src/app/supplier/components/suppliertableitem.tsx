import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { StaticImageData } from "next/image";
import Image from "next/image";
type SupplierTableItemProps = {
  imageUrl: string | StaticImageData;
  productName: string;
  size: string;
  weight: number;
  finish: string;
  color: string;
  status: "Approved" | "Pending" | "Rejected";
};

const statusColorMap: Record<SupplierTableItemProps["status"], string> = {
  Approved: "bg-green-500",
  Pending: "bg-yellow-400",
  Rejected: "bg-red-500",
};

const SupplierTableItem: React.FC<SupplierTableItemProps> = ({
  imageUrl,
  productName,
  size,
  weight,
  finish,
  color,
  status,
}) => {
  return (
    <TableRow>
      <TableCell className="flex items-center gap-2">
        <Image src={imageUrl} alt="product image" width={100} />
        {productName}
      </TableCell>
      <TableCell>{size}</TableCell>
      <TableCell>{weight} lb</TableCell>
      <TableCell>{finish}</TableCell>
      <TableCell>{color}</TableCell>
      <TableCell>
        <div
          className={`text-white px-3 py-1 rounded-full text-sm font-medium w-fit ${statusColorMap[status]}`}
        >
          {status}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default SupplierTableItem;
