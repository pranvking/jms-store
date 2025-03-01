"use client"
import { useState } from 'react';
export default function Search() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
      <input className='w-96 h-9 pr-3 relative bottom-0.5 pl-10 py-2 font-semibold text-search rounded-full focus:ring-0 focus:outline-none"'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Store"
      />
       
      {filteredList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}