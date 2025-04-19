"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "home", title: "Home" },
  { id: "tentang", title: "Tentang" },
  { id: "layanan", title: "Layanan" },
  { id: "stories", title: "Stories" },
  { id: "contact", title: "Contact" },
  { id: "latihan", title: "Latihan" },
  { id: "bab1", title: "BAB 1 - Pendahuluan" },
  { id: "bab2", title: "BAB 2 - Landasan Teori" },
  { id: "bab3", title: "BAB 3 - Metodologi Penelitian" },
  { id: "bab4", title: "BAB 4 - Hasil dan Pembahasan" },
  { id: "bab5", title: "BAB 5 - Kesimpulan dan Saran" },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState(sections[6].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (let i = sections.length - 1; i >= 6; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (
          sectionElement &&
          sectionElement.offsetTop - 120 <= scrollPosition
        ) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-purple-700 text-white py-4 px-6 text-lg font-semibold shadow-md z-50 flex justify-between items-center">
        <span className="text-3xl font-bold tracking-wide text-black">
          Skripsi Online
        </span>
        <div className="flex space-x-3">
          {sections.slice(0, 6).map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              scroll={false}
              legacyBehavior
            >
              <a className="px-3 py-1 rounded-lg bg-white text-purple-700 font-medium hover:bg-yellow-300 hover:text-black transition duration-200 shadow-md text-sm">
                {section.title}
              </a>
            </Link>
          ))}
        </div>
      </nav>

      {/* Sticky Heading */}
      <div className="sticky top-[60px] bg-purple-100 shadow-md p-3 text-lg font-semibold text-purple-700 z-40 transition-all duration-300">
        {sections.find((section) => section.id === activeSection)?.title}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-24 px-6 space-y-16">
        {sections.slice(6).map((section) => (
          <div key={section.id} id={section.id} className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-4 border-b-2 border-purple-500 pb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {section.id === "bab1" &&
                "Bab ini membahas latar belakang penelitian, permasalahan yang dihadapi, serta tujuan dari penelitian yang dilakukan."}
              {section.id === "bab2" &&
                "Bab ini berisi teori-teori dan literatur yang mendukung penelitian, termasuk konsep-konsep utama yang digunakan sebagai dasar analisis."}
              {section.id === "bab3" &&
                "Bab ini menjelaskan metode penelitian yang digunakan, mulai dari teknik pengumpulan data, populasi dan sampel, hingga metode analisis data."}
              {section.id === "bab4" &&
                "Bab ini menyajikan hasil penelitian dan analisisnya, dengan berbagai temuan yang didukung oleh data serta pembahasannya secara mendalam."}
              {section.id === "bab5" &&
                "Bab ini berisi kesimpulan dari penelitian yang dilakukan serta saran yang dapat diberikan berdasarkan hasil yang ditemukan."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}