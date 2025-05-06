"use client"

import ProductCard from "./Components/ProductCard"
import {prod2,prod1,logo} from "../../../public/assets/index"
import Image from 'next/image';
import { useState } from 'react';
import CartDropdown from "@/app/buyer/Components/CartDropdown"

export default function Buyer() {
    return (
        <div className="w-full min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
            <CartDropdown/>
            <h1 className="text-2xl font-bold mb-8">Products</h1>
            <div className="bg-blue-500 w-full rounded-2xl h-60 px-8 sm:mb-10 justify-items-center">
                <Image src={logo} alt="SDARLY Logo" width={750}  className="h-60" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductCard
                    imageUrl={prod1}
                    title="Container Shipping Package"
                    subtitle="Best value for bulk shipping worldwide"
                    code="CON1234"
                    pricePerKg={2.5}
                    sellerName="Global Cargo Services"
                />

                <ProductCard
                    imageUrl={prod1}
                    title="Ocean Freight Solution"
                    subtitle="Efficient, eco-friendly shipping at competitive prices"
                    code="CON2345"
                    pricePerKg={3.0}
                    sellerName="SeaLine Logistics"
                />

                <ProductCard
                    imageUrl={prod2}
                    title="Heavy Duty Cargo Transport"
                    subtitle="Transport your bulk goods safely and affordably"
                    code="CON3456"
                    pricePerKg={4.2}
                    sellerName="Mega Freight"
                />

                <ProductCard
                    imageUrl={prod2}
                    title="Port-to-Port Shipping"
                    subtitle="Reliable and fast deliveries across all major ports"
                    code="CON4567"
                    pricePerKg={3.8}
                    sellerName="CargoMaster Inc."
                />

                <ProductCard
                    imageUrl={prod1}
                    title="Bulk Goods Shipping"
                    subtitle="Perfect for large-scale container shipments"
                    code="CON5678"
                    pricePerKg={2.9}
                    sellerName="QuickShip Ltd."
                />

                <ProductCard
                    imageUrl={prod1}
                    title="International Freight Service"
                    subtitle="Worldwide shipping with global coverage"
                    code="CON6789"
                    pricePerKg={3.5}
                    sellerName="FreightHub Services"
                />

                <ProductCard
                    imageUrl={prod2}
                    title="Temperature-Controlled Container"
                    subtitle="Ideal for perishable goods and sensitive cargo"
                    code="CON7890"
                    pricePerKg={5.0}
                    sellerName="ColdChain Logistics"
                />

                <ProductCard
                    imageUrl={prod2}
                    title="Bulk Liquids Transport"
                    subtitle="Shipping liquids in bulk with precision and safety"
                    code="CON8901"
                    pricePerKg={4.7}
                    sellerName="LiquiTrans Solutions"
                />
            </div>
        </div>
    );
}
