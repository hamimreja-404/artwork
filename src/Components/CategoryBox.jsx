import React from "react";

export default function CategoryBox({ address, text }) {
  return (
    <div className="relative w-full max-w-sm aspect-[4/3] overflow-hidden rounded-2xl 
      shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.5)] 
      transition-shadow duration-500 group">
      
      {/* Background Image */}
      <img
        src={address}
        alt={text}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 
        flex flex-col justify-center items-center text-white px-4">
        
        <h2 className="text-2xl font-semibold mb-3 text-center drop-shadow-md">{text}</h2>

        <button className="bg-white text-black font-medium px-5 py-2 rounded-full text-sm 
          hover:bg-gray-100 transition">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
}
