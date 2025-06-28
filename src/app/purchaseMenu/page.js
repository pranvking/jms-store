"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Fakenavbar from "../component/navbar/fakeNav";
import Link from "next/link";

const Purchase = () => {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [selected, setSelected] = useState(false);

  // Auto-close cart popup after 3 seconds
  useEffect(() => {
    if (showCartPopup) {
      const timer = setTimeout(() => {
        setShowCartPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showCartPopup]);

  return (
    <div>
      <Fakenavbar />
      <div className="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
        <Link href="/discovery">Discovery</Link>
        <Link href="/browser">Browser</Link>
        <Link href="/news">News</Link>
      </div>

      <div className="flex">
        {img && (
          <img
            src={img}
            alt={name}
            className="w-[257px] h-[350px] mt-10 mr-24 ml-40 rounded-lg"
          />
        )}
        <div className="flex flex-col justify-start mt-10">
          <h2 className="text-white text-3xl">{name}</h2>
          <h1 className="text-white text-lg mt-4">Nrp. {price}</h1>

          <div className="flex gap-5 mt-4">
            <button
              onClick={() => setShowOrderModal(true)}
              className="rounded-2xl border border-solid border-purpleCustom h-[45px] w-[140px] text-bold text-[20px] text-purpleCustom bg-yellow-100"
            >
              Order now
            </button>
            <button
              onClick={() => setShowCartPopup(true)}
              className="rounded-2xl border border-solid border-purpleCustom h-[45px] w-[140px] text-bold text-[20px] text-purpleCustom bg-yellow-100"
            >
              Add to cart
            </button>
          </div>

          <h2 className="text-white text-lg mt-4">
            {name} GiftCard | Instant Delivery or within a few selected hours.
          </h2>
          <h2 className="text-white text-lg mt-4">
            {name} INSTANT AUTOMATIC DELIVERY. After payment, you will <br />
            immediately receive a gift card code in digital form.
          </h2>
        </div>
      </div>

      {/* 🔴 Order Now Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
            {!selected ? (
              <>
                <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelected(true)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Cash on Delivery
                  </button>
                  <button
                    onClick={() => setSelected(true)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                  >
                    eSewa
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Order Confirmed</h2>
                <p className="text-gray-700 mb-6">
                  Details have been sent to your email.
                </p>
                <button
                  onClick={() => {
                    setShowOrderModal(false);
                    setSelected(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* 🟢 Add to Cart Popup */}
      {showCartPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
            <h2 className="text-xl font-bold mb-4 text-green-600">
              Item has been added to your cart!
            </h2>
            <button
              onClick={() => setShowCartPopup(false)}
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

export default Purchase;
