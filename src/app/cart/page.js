'use client';

import React, { useState } from 'react';
import Fakenavbar from '../component/navbar/fakeNav';
import Link from 'next/link';

const CartPage = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [cartItem, setCartItem] = useState({
    name: 'League of Legends',
    price: '12100.00',
    img: './images/sliderImages/lol.png',
    quantity: 1,
  });

  const handleCancel = () => {
    setCartItem(null); // remove item
    setShowCancelModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Fakenavbar />

      <div className="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
        <Link href="/discovery">Discovery</Link>
        <Link href="/browser">Browser</Link>
        <Link href="/news">News</Link>
      </div>

      <div className="ml-40 mt-10">
        <h2 className="text-white text-xl underline mb-8">Your Cart</h2>

        {cartItem ? (
          <>
            <div className="bg-[#1e1e1e] rounded-xl p-6 w-[600px] flex items-center gap-6">
              <img
                src={cartItem.img}
                alt={cartItem.name}
                className="w-[120px] h-[160px] object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{cartItem.name}</h3>
                <p className="text-gray-400 mb-4">Qty: {cartItem.quantity}</p>
                <p className="text-yellow-300 font-bold text-lg">
                  Nrp. {cartItem.price}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-6 mt-8 w-[600px]">
              <button
                onClick={() => setShowCancelModal(true)}
                className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowPurchaseModal(true)}
                className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium"
              >
                Purchase
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-lg italic">Your cart is empty.</p>
        )}
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center w-80 shadow-lg">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Cart Cancelled
            </h2>
            <p className="text-gray-700 mb-4">Your cart has been cleared.</p>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center w-80 shadow-lg">
            <h2 className="text-xl font-bold text-green-600 mb-4">
              Purchase Successful
            </h2>
            <p className="text-gray-700 mb-4">
              Thank you for your purchase! Details sent to your email.
            </p>
            <button
              onClick={() => setShowPurchaseModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
