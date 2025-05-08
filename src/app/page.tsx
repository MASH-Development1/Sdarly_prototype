"use client";

import { useState } from "react";
import Buyer from "./buyer/page";
import Supplier from "./supplier/page";
import Admin from "./admin/page";
import { Icon } from "@iconify/react";

const components = [
    { label: "Buyer", component: <Buyer key="buyer" /> },
    { label: "Supplier", component: <Supplier key="supplier" /> },
    { label: "Admin", component: <Admin key="admin" /> },
];

export default function Home() {
    const [index, setIndex] = useState(0);

    const toggleComponent = () => {
        setIndex((prev) => (prev + 1) % components.length); // cycle through 0 → 1 → 2 → 0
    };

    return (
        <div className="h-full w-full grid">
            <div className="relative h-full w-full p-4 justify-items-center">
                {/* Toggle Button */}
                <button
                    onClick={toggleComponent}
                    className="absolute top-20 right-4 flex flex-col items-center group"
                    aria-label="Toggle scenario"
                    title="Toggle scenario"
                >
                    <Icon
                        icon="mdi:arrow-right"
                        className="text-3xl text-gray-700 hover:text-blue-600 transition"
                    />
                    <span className="mt-1 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition">
            Switch to {components[(index + 1) % components.length].label}
          </span>
                </button>
                {/* Render selected component */}
                {components[index].component}
            </div>
        </div>
    );
}
