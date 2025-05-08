"use client";
import CustomerTable from "@/app/admin/components/CustomerTable";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import SupplierTable from "@/app/supplier/components/suppliertable";
import { Icon } from "@iconify/react";

export type Product = {
    imageUrl: string | StaticImageData;
    productName: string;
    size: string;
    weight: number;
    finish: string;
    color: string;
    status: "Approved" | "Pending" | "Rejected";
};

type DashboardCardProps = {
    title: string;
    value: string | number;
    change: string;
    changeColor: string;
    icon: string;
    iconBg: string;
    description: string;
};

const DashboardCard = ({
                           title,
                           value,
                           change,
                           changeColor,
                           icon,
                           iconBg,
                           description,
                       }: DashboardCardProps) => (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-60 flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className={`text-sm font-medium ${changeColor}`}>
                {change} {description}
            </p>
        </div>
        <div className={`text-3xl rounded-full p-2 ${iconBg}`}>
            <Icon icon={icon} className="text-white" />
        </div>
    </div>
);

export default function Admin() {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <div className="w-[80%] min-h-screen pt-15 sm:pt-25 font-[family-name:var(--font-geist-sans)] mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="flex flex-wrap gap-4 mb-10">
                <DashboardCard
                    title="Total User"
                    value="40,689"
                    change="▲ 8.5%"
                    changeColor="text-green-500"
                    icon="mdi:account-group"
                    iconBg="bg-indigo-500"
                    description="Up from yesterday"
                />
                <DashboardCard
                    title="Total Order"
                    value="10,293"
                    change="▲ 1.3%"
                    changeColor="text-teal-500"
                    icon="mdi:cube"
                    iconBg="bg-yellow-400"
                    description="Up from past week"
                />
                <DashboardCard
                    title="Total Sales"
                    value="$89,000"
                    change="▼ 4.3%"
                    changeColor="text-red-500"
                    icon="mdi:chart-line"
                    iconBg="bg-green-300"
                    description="Down from yesterday"
                />
                <DashboardCard
                    title="Total Pending"
                    value="2,040"
                    change="▲ 1.8%"
                    changeColor="text-green-500"
                    icon="mdi:clock-time-four"
                    iconBg="bg-orange-300"
                    description="Up from yesterday"
                />
            </div>

            <h1 className="text-3xl font-bold mb-8">My Products</h1>
            <SupplierTable products={products} />
            <h1 className="text-3xl font-bold mt-8 mb-8">Supplier Requests</h1>
            <CustomerTable />
        </div>
    );
}
