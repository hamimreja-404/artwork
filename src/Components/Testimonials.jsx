import React from 'react';
import man from '../assets/man.png';
import woman from '../assets/woman.png';

const testimonials = [
  {
    name: "Ishita Sharma",
    role: "Happy Customer",
    image: woman,
    feedback:
      "The sketch turned out better than I imagined. Incredible detail and fast delivery! My husband loved it as a gift.",
  },
  {
    name: "Arjun Patel",
    role: "Returning Buyer",
    image: man,
    feedback:
      "This is my third order and the quality never disappoints. The artists here are truly talented!",
  },
  {
    name: "Ritika Jain",
    role: "Gift Giver",
    image: woman,
    feedback:
      "I ordered a custom family portrait and it was absolutely beautiful. Definitely coming back for more!",
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="py-20 bg-[#f9fafb]">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by hundreds of happy clients for preserving their memories in artistic form.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:grid-cols-3 px-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-black/10"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.role}</p>
            <p className="text-gray-600 text-sm italic leading-relaxed">“{item.feedback}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
