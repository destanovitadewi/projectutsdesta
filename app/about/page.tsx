"use client";

import React from "react";
import Image from "next/image";
import gambarProfile from "@/./public/profile.jpeg";
import { GraduationCap, MapPin, Sparkles, Heart } from "lucide-react";

export default function AboutSection() {
  const aboutDetails = [
    {
      title: "Education",
icon: <GraduationCap size={48} className="text-black" />,
description: (
  <>
    <p>2019-2022 SMA Kartika XIX-1 Bandung</p>
    <p>2023-Sekarang Universitas Ma'soem</p>
  </>
),
gradient: "from-teal-500 to-teal-700",

    },
    {
      title: "Location",
      icon: <MapPin size={48} className="text-black" />,
      description:
        "Jatinangor,Sumedang.",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Hobbies",
      icon: <Heart size={48} className="text-black" />,
      description:
        "Menyukai membaca, menulis, dan menjelajahi teknologi baru di dunia web development.",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Goals",
      icon: <Sparkles size={48} className="text-black" />,
      description:
        "Menjadi Software Engineer handal dan memberikan kontribusi dalam solusi teknologi yang inovatif.",
      gradient: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 💡 Hero Section - Personal Info */}
      <section className="bg-gradient-to-br from-indigo-500 to-indigo-700 py-16 text-white ">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-[5px] border-white shadow-2xl mb-4 transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <Image
              src={gambarProfile}
              alt="Profile of Desta Novita Dewi"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
              Tentang Saya
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Mahasiswa Sistem Informasi dengan ketertarikan pada pengembangan
              web, analisis data, desain, dan manajemen
              proyek.
            </p>
          </div>
        </div>
      </section>

      {/* 📦 About Cards */}
      <section className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutDetails.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.gradient} rounded-2xl shadow-xl p-5 flex items-start gap-5 hover:scale-[1.03] transition-transform duration-300`}
            >
              <div className="bg-white rounded-full p-3 shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-1\/5 {
            width: 40%;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}