"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/themeContext"; // pakai context tema

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // akses context tema

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Navbar Utama */}
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md fixed w-full z-40">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between h-14 items-center">
            {/* Logo & Nama */}
            <div className="flex items-center space-x-2 relative z-50">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                D
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Desta Novita
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <Link href="/about" className="hover:text-indigo-500 transition-all duration-300">
                Tentang Saya
              </Link>
              <Link href="/skill" className="hover:text-indigo-500 transition-all duration-300">
                Skill Saya
              </Link>
              <Link href="/table" className="hover:text-indigo-500 transition-all duration-300">
                Data Mahasiswa
              </Link>
              <Link href="/contact" className="hover:text-indigo-500 transition-all duration-300">
                Kontak Saya
              </Link>
              <Link href="/portfolio" className="hover:text-indigo-500 transition-all duration-300">
                Portfolio
              </Link>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-10 left-4 right-4 md:hidden bg-white dark:bg-gray-900 p-3 space-y-2 rounded-lg shadow-lg transition-all duration-300 z-30 max-w-xs mx-auto ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 hidden"
        }`}
      >
        <Link href="/about" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Tentang Saya
        </Link>
        <Link href="/skill" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Skill Saya
        </Link>
        <Link href="/table" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Data Mahasiswa
        </Link>
        <Link href="/contact" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Kontak Saya
        </Link>
        <Link href="/portfolio" className="block hover:text-indigo-500 transition-all duration-300 text-sm">
          Portfolio
        </Link>
      </div>

      {/* Tombol Theme Toggle Pojok Kiri Bawah */}
      <button
      onClick={toggleTheme}
      className="fixed bottom-5 left-5 z-50 px-4 py-2 rounded-full shadow-md transition-all duration-300
                 bg-indigo-500 text-white hover:bg-indigo-600"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
    </nav>
  );
}
