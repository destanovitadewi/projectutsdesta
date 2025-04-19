"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 🖼️ Profil & Deskripsi */}
        <div>
          <h4 className="text-3xl font-bold mb-4 tracking-wide">
            Desta Novita Dewi
          </h4>
          <p className="text-base leading-relaxed mb-6">
            Seorang Mahasiswa sistem informasi yang tertarik dibidang desain dan pengembangan sistem. Terima kasih telah berkunjung!
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Instagram size={28} />
            </Link>
            <Link
              href="mailto:example@email.com"
              aria-label="Email"
              className="hover:text-gray-400 transition"
            >
              <Mail size={28} />
            </Link>
          </div>
        </div>

        {/* 📰 Newsletter */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">
            📩 Berlangganan Newsletter
          </h4>
          <p className="text-base mb-6">
            Dapatkan informasi terbaru langsung ke email Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full p-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition py-3 px-6 rounded-lg font-semibold"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </div>

      {/* 🔝 Scroll ke Atas */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-yellow-400 text-indigo-800 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-transform duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>

      {/* 🏷️ Hak Cipta */}
      <div className="text-center text-sm mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Desta Novita Dewi</span>. All rights
        reserved.
      </div>

      {/* 🎨 Styling Mobile */}
      <style jsx>{`
        @media (max-width: 360px) {
          h4 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}