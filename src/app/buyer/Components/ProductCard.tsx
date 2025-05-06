import React from 'react';
import { Globe, Carrot, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from "next/image";


type ProductCardProps = {
    imageUrl: string | StaticImageData ;
    title: string;
    subtitle: string;
    code: string;
    pricePerKg: number;
    sellerName: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
                                                     imageUrl,
                                                     title,
                                                     subtitle,
                                                     code,
                                                     pricePerKg,
                                                     sellerName,
                                                 }) => {
    return (
        <div className="max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex">
                <Image src={imageUrl} alt="product" width={120} height={40} className="w-1/2 object-cover" />
                <div className="w-1/2 p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 mb-2">
              <span className="flex items-center gap-1 text-sm px-2 py-1 bg-gray-100 rounded-full">
                <Globe size={14} />
                glob
              </span>
                            <span className="flex items-center gap-1 text-sm px-2 py-1 bg-gray-100 rounded-full">
                <Carrot size={14} />
                veges
              </span>
                        </div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t flex items-center justify-between">
                <div>
                    <p className="text-xs text-indigo-600 font-semibold">#{code}</p>
                    <p className="text-2xl font-bold">{pricePerKg}/KG</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        {/* Placeholder avatar icon */}
                        <div className="text-xl">👤</div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{sellerName}</p>
                        <p className="text-xs text-gray-400">Lorrem asd Lorem ipsu</p>
                    </div>
                </div>
                <div className="ml-4 text-gray-600">
                    <ShoppingBag className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
