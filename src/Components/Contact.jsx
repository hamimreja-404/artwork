import React from 'react';
import { Instagram, Mail, Youtube, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id='contact' className="bg-[#f9fafb] border-t border-gray-200 pt-20 pb-16 px-4">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have a question or a custom request? Reach us on any platform below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto text-center">
          {/* Instagram */}
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center hover:text-orange-500 transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Instagram className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">@yourhandle</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center hover:text-green-600 transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Phone className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">+91 98765 43210</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center hover:text-red-600 transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Youtube className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">@yourchannel</span>
          </a>

          {/* Email */}
          <a
            href="mailto:yourmail@example.com"
            className="flex flex-col items-center hover:text-blue-600 transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Mail className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">yourmail@example.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} <span className="font-semibold">Artify</span>. All rights reserved.</p>
        <p className="text-gray-400 mt-1">Crafted with 🖌️ by our artist team.</p>
      </footer>
    </>
  );
}
