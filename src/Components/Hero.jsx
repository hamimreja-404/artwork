import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons
import BG from "../assets/BG.jpg";
import BG_1 from "../assets/BG_1.jpg";
import LOGO from "../assets/LOGO.jpg";
const slides = [
  {
    image: BG,
    title: "Your Memory, Our Responsibility",
    subtitle:
      "Personalized sketches that preserve your special moments forever.",
    button: "Get Your Custom Art",
  },
  {
    image: BG_1,
    title: "Art That Speaks Your Story",
    subtitle: "Transform your emotions into timeless masterpieces with Artify.",
    button: "Explore Styles",
  },
];
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setPrev(current); // Keep old slide for transition
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true); // Start fade-in
      }, 500); // Match transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const currentSlide = slides[current];
  const prevSlide = slides[prev];

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Previous Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${prevSlide.image})` }}
        />

        {/* Current Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />

        {/* Overlay + Content */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
          <div
            className={`text-center text-white px-6 transition-all duration-700 ease-in-out ${
              fade
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-md">
              {currentSlide.title}
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 text-gray-200 drop-shadow">
              {currentSlide.subtitle}
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300">
              {currentSlide.button}
            </button>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-white/20">
        <nav className="bg-black/10 backdrop-blur-md p-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-white text-2xl">
              <img className="w-[40px] rounded-full" src={LOGO} alt="" />
            </div>
            <h1 className="text-white font-bold text-2xl">
              Rohit Choudhary Arts
            </h1>
          </div>

          {/* Toggle Button (Hamburger / X) */}
          <button
            className="text-white block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#category" className="hover:underline">
                Category
              </a>
            </li>
            <li>
              <a href="#custom" className="hover:underline">
                Customize
              </a>
            </li>
            <li>
              <a href="#artists" className="hover:underline">
                Artists
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu with Smooth Slide & Blur */}
          <ul
            className={`absolute top-full left-0 w-full text-white text-center  flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out md:hidden font-medium bg-black/70 backdrop-blur-lg ${
              menuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
            }`}
          >
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#category" onClick={() => setMenuOpen(false)}>
                Category
              </a>
            </li>
            <li>
              <a href="#custom" onClick={() => setMenuOpen(false)}>
                Customize
              </a>
            </li>
            <li>
              <a href="#artists" onClick={() => setMenuOpen(false)} >
                Artists
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 flex items-center justify-start h-full px-6 md:px-20 pt-24 md:pt-0"
      >
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-lg">
            Your Memory, <br />
            Our Responsibility <br />
            to Preserve It
          </h1>
          <div className="flex gap-4 flex-wrap">
            <a href="#custom">
              <button className="px-6 py-3 rounded-xl bg-white/30 backdrop-blur-md text-white font-semibold hover:bg-white/40 transition shadow-lg">
                Buy Now
              </button>
            </a>
            <a href="#category">
              <button className="px-6 py-3 rounded-xl bg-white/30 backdrop-blur-md text-white font-semibold hover:bg-white/40 transition shadow-lg">
                Category
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
