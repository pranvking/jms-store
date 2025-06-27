'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Purchase = () => {
  const searchParams = useSearchParams();
  const img = searchParams.get('img');
  const name = searchParams.get('name');
  const price = searchParams.get('price');

  useEffect(() => {
    if (img && name && price) {
      alert(`Image: ${img}, Name: ${name}, Price: ${price}`);
    }
  }, [img, name, price]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Purchase Page</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> {price}</p>
      {img && <img src={img} alt={name} className="mt-4 w-60 h-auto" />}
    </div>
  );
};

export default Purchase;
