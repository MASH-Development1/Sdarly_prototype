import React from 'react';
import { Globe, Carrot, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type ProductCardProps = {
    imageUrl: string | StaticImageData;
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
    const handleAddToCart = () => {
        // Create a product object to add to the cart
        const product = {
            imageUrl,
            title,
            subtitle,
            code,
            pricePerKg,
            sellerName,
            quantity: 1, // Initial quantity is 1 when added to the cart
        };

        // Retrieve existing cart from localStorage, or initialize it as an empty array
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Check if the product with the same 'code' already exists in the cart
        const productIndex = existingCart.findIndex((item: any) => item.code === product.code);

        if (productIndex !== -1) {
            // If the product exists, update its quantity
            existingCart[productIndex].quantity += 1;
        } else {
            // If it doesn't exist, add the new product to the cart
            existingCart.push(product);
        }

        // Update the cart in localStorage with the new data
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert('Added to cart!');
    };

    return (
        <div className="max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex">
                <Image src={imageUrl} alt="product" width={60} className="w-1/2 object-cover h-60" />
                <div className="w-1/2 p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <span className="flex items-center gap-1 text-sm px-2 py-1 bg-gray-100 rounded-full">
                                <Globe size={14} />
                                Glob
                            </span>
                            <span className="flex items-center gap-1 text-sm px-2 py-1 bg-gray-100 rounded-full">
                                <Carrot size={14} />
                                Veges
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
                    <p className="text-2xl font-bold">{pricePerKg} T</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="text-xl">👤</div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{sellerName}</p>
                        <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="ml-4 text-gray-600 hover:text-indigo-600">
                    <ShoppingBag className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};



export default ProductCard;
