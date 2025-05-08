"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag, Plus, Minus, X, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, [open]);

  const updateCart = (items: any[]) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const changeQuantity = (index: number, delta: number) => {
    const newItems = [...cartItems];
    newItems[index].quantity = Math.max(
      1,
      (newItems[index].quantity || 1) + delta
    );
    updateCart(newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    updateCart(newItems);
  };

  const handleCheckout = () => {
    alert("Proceed to checkout...");
    // Add your checkout logic here
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <ShoppingBag className="w-6 h-6 text-gray-700" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Cart Modal */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white border rounded-xl shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">Cart Items</h4>
                <button onClick={() => setOpen(false)}>
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500 text-center">
                  No items in cart.
                </p>
              ) : (
                <ul className="space-y-4 max-h-60 overflow-y-auto">
                  {cartItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm flex justify-between items-center border rounded-md px-3 py-2"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-gray-500">
                          {item.pricePerKg}/KG
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => changeQuantity(idx, -1)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button
                          onClick={() => changeQuantity(idx, 1)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteItem(idx)}
                          className="p-1 bg-red-100 rounded hover:bg-red-200"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {cartItems.length > 0 && (
                <button
                  onClick={handleCheckout}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Checkout
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartDropdown;
