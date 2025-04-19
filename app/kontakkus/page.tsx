"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail size={36} className="text-black" />,
      title: "Email",
      detail: "Fadhillah121905@gmail.com",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: <Phone size={36} className="text-black" />,
      title: "Telepon",
      detail: "+62 81346301871",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <MapPin size={36} className="text-black" />,
      title: "Alamat",
      detail: "Bandung, Indonesia",
      gradient: "from-green-500 to-green-700",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          📬 Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 📝 Formulir Kontak */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">
              💬 Kirim Pesan
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama Anda"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Subjek"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Tulis pesan Anda di sini..."
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                <Send size={20} /> Kirim Pesan
              </button>
            </form>
          </div>

          {/* 🏢 Informasi Kontak */}
          <div className="grid grid-cols-1 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${info.gradient} rounded-2xl shadow-lg p-5 flex items-center gap-4 hover:scale-105 transition-transform duration-300`}
              >
                <div className="bg-white rounded-full p-3 shadow-md">
                  {info.icon}
                </div>
                <div className="text-white">
                  <h4 className="text-lg font-semibold">{info.title}</h4>
                  <p>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎨 Styling Mobile */}
    </section>
  );
}