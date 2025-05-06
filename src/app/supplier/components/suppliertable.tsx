import React from "react";
import SupplierTableItem from "./suppliertableitem";
import {
  ivory_paper,
  white_paper,
  green_paper,
} from "../../../../public/assets/index";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SupplierTable() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
          <SupplierTableItem
            imageUrl={ivory_paper}
            productName={"Exact Vellum Bristol Paper"}
            size={"8 1/2 x 14"}
            weight={67}
            finish={"Uncoated Vellum"}
            color={"Ivory"}
            status={"Approved"}
          />
          <SupplierTableItem
            imageUrl={white_paper}
            productName={"EarthChoice Office Paper"}
            size={"8 1/2 x 11"}
            weight={20}
            finish={"Uncoated Smooth"}
            color={"White"}
            status={"Rejected"}
          />
          <SupplierTableItem
            imageUrl={green_paper}
            productName={"Astrobrights Gamma Paper"}
            size={"8 1/2 x 11"}
            weight={60}
            finish={"Uncoated Smooth"}
            color={"Green"}
            status={"Pending"}
          />
        </TableBody>
      </Table>
    </div>
  );
}
