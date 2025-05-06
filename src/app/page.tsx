import Buyer from "./buyer/page";
import Supplier from "./supplier/page";
export default function Home() {
  return (
    <>
      <div className="h-full w-full justify-items-center">
        <Supplier />
      </div>
    </>
  );
}
