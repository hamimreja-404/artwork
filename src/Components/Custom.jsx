import React from "react";
import { Upload, Shapes, Paintbrush, Smile } from "lucide-react";

export default function CustomSketch() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-white to-gray-100"
      id="custom"
    >
      {/* Title + Subtitle */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our simple 4-step process brings your photos to life as timeless
          hand-drawn sketches.
        </p>
      </div>

      {/* 4-Step Process */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        <div
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <Upload className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Upload Photo
          </h3>
          <p className="text-gray-500 text-sm">
            Choose a high-quality photo you'd love to see sketched.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Shapes className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Select Sketch Type
          </h3>
          <p className="text-gray-500 text-sm">
            Pick from styles like pencil, charcoal, digital ink, or color
            sketch.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Paintbrush className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            We Sketch It
          </h3>
          <p className="text-gray-500 text-sm">
            Our skilled artists craft your sketch with precision and heart.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Smile className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Receive Your Art
          </h3>
          <p className="text-gray-500 text-sm">
            Download your finished sketch or get it shipped to your door.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16" data-aos="zoom-in-up">
        <a href="#custom-form">
          <button className="relative px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
            ✏️ Fill Custom Form
          </button>
        </a>
      </div>
    </section>
  );
}
