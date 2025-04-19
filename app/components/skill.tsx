"use client";

import React from "react";
import Image from "next/image";
import { Globe, Database, Palette, Shield, Laptop } from "lucide-react";

export default function SkillSection() {
  const skills = [
    {
      name: "Pengembangan Web",
      icon: <Globe size={48} className="text-blue-500" />,
      description:
        "Membangun website responsif dengan Next.js, React, dan PHP.",
    },
    {
      name: "Manajemen Database",
      icon: <Database size={48} className="text-green-500" />,
      description: "Mengelola database dengan MySQL dan MongoDB.",
    },
    {
      name: "Desain UI/UX",
      icon: <Palette size={48} className="text-pink-500" />,
      description: "Desain antarmuka intuitif & UX yang menarik.",
    },
    {
      name: "Dasar Keamanan Siber",
      icon: <Shield size={48} className="text-red-500" />,
      description: "Dasar keamanan siber untuk melindungi data.",
    },
    {
      name: "Rekayasa Perangkat Lunak",
      icon: <Laptop size={48} className="text-yellow-500" />,
      description: "Pengembangan perangkat lunak dengan metodologi tepat.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-blue-700 p-6 text-white text-center pt-24">
        {/* ✅ Tambahkan padding-top untuk menggeser profil ke bawah */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/profile.jpeg"
            alt="Foto Profil"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold mt-4">Desta Novita Dewi</h1>
        <p className="text-lg opacity-90">
          Mahasiswa Sistem Informasi Semester 4 di Universitas Ma'soem
        </p>
      </div>
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Keahlian Saya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Style inline untuk responsivitas pada perangkat mobile */}
        <style jsx>{`
          @media (max-width: 360px) {
            .grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
