import { Button } from "@/components/ui/button";
import SupplierTable from "./components/suppliertable";

export default function Supplier() {
  return (
    <>
      <div className="w-[80%] min-h-screen pt-8 sm:pt-18 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold mb-8">My Products</h1>
        <SupplierTable />
        <div>{/* <Button></Button> */}</div>
      </div>
    </>
  );
}
