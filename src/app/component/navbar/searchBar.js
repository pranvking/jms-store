"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const gameData = {
    "league of legends": {
      img: "./images/sliderImages/lol.png",
      name: "League Of Legends",
      price: "12100.00",
    },
    "fortnite": {
      img: "./images/sliderImages/fortnite.jpg",
      name: "Fortnite",
      price: "9500.00",
    },
    "valorant": {
      img: "./images/sliderImages/valorant.png",
      name: "Valorant",
      price: "8700.00",
    },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const data = gameData[search.toLowerCase()];
      if (data) {
        const query = `/purchaseMenu?img=${encodeURIComponent(data.img)}&name=${encodeURIComponent(data.name)}&price=${encodeURIComponent(data.price)}`;
        router.push(query);
      } else {
        alert("Game not found!");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-1"> {/* mt-4 moved it up */}
      <input
        className="w-full h-10 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Store"
      />
    </div>
  );
}
