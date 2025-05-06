import { Button } from "@/components/ui/button";
import SupplierTable from "./components/suppliertable";
import AddProductOverlay from "./components/addproductoverlay";

export default function Supplier() {
  return (
    <>
      <div className="w-[80%] min-h-screen pt-15 sm:pt-25 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold mb-8">My Products</h1>
        <SupplierTable />
        <AddProductOverlay />
      </div>
    </>
  );
}
