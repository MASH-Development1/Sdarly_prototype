"use client";

import { useState } from "react";
import Buyer from "./buyer/page";
import Supplier from "./supplier/page";
import { Icon } from "@iconify/react";
import Admin from "./admin/page"

export default function Home() {
    const [showBuyer, setShowBuyer] = useState(false);
    const toggleComponent = () => setShowBuyer(!showBuyer);

  return (
    <div className="h-full w-full grid ">
      {/*<div className="relative h-full w-full p-4 justify-items-center">*/}
      {/*  /!* Toggle Button *!/*/}
      {/*  <button*/}
      {/*    onClick={toggleComponent}*/}
      {/*    className="absolute top-20 right-4 flex flex-col items-center group"*/}
      {/*    aria-label="Toggle scenario"*/}
      {/*    title="Toggle scenario"*/}
      {/*  >*/}
      {/*    <Icon*/}
      {/*      icon={showBuyer ? "mdi:arrow-left" : "mdi:arrow-right"}*/}
      {/*      className="text-3xl text-gray-700 hover:text-blue-600 transition"*/}
      {/*    />*/}
      {/*    <span className="mt-1 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition">*/}
      {/*      Switch between scenarios*/}
      {/*    </span>*/}
      {/*  </button>*/}

      {/*          {showBuyer ? <Buyer key="buyer" /> : <Supplier key="supplier" />}*/}
      {/*      </div>*/}
        <Admin />
        </div>
    );
}
