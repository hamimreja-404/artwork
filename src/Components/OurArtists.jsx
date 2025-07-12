import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import DP from '../assets/DP.png';
import Avatar from '../assets/Avatar.png';

const artists = [
  {
    name: "Aarav Mehta",
    specialty: "Pencil & Charcoal Sketch Artist",
    image: DP,
    instagram: "https://instagram.com/aaravmehta",
    linkedin: "#",
  },
  {
    name: "Diya Kapoor",
    specialty: "Digital Portrait Illustrator",
    image: Avatar,
    instagram: "https://instagram.com/diyasketches",
    linkedin: "#",
  },
  {
    name: "Rohan Verma",
    specialty: "Color & Watercolor Sketch Artist",
    image: Avatar,
    instagram: "https://instagram.com/rohanv_art",
    linkedin: "#",
  },
];

export default function OurArtists() {
  return (
    <section className="py-20 bg-[#f6f7f8]" id="artists">
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Meet Our Artists</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our talented artists bring your memories to life with their unique styles and passion for art.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid gap-10 md:grid-cols-3 px-6 max-w-7xl mx-auto">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center duration-300 "
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-orange-300 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-gray-800">{artist.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{artist.specialty}</p>
            <div className="flex gap-4 text-gray-600">
              <a href={artist.instagram} target="_blank" rel="noreferrer">
                <Instagram className="w-5 h-5 hover:text-orange-500 transition-transform hover:scale-125" />
              </a>
              <a href={artist.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-600 transition-transform hover:scale-125" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
