"use client";

import React from "react";
import { BookOpen, MapPin, User, Star } from "lucide-react";

const data = [
  {
    no: 1,
    nim: "20232505040",
    nama: "Desta Novita Dewi",
    gender: "Perempuan",
    prodi: "Sistem Informasi",
    kelas: "SI-4B",
    semester: 6,
    alamat: "Jatinangor",
    hobby: "Bermain tenis meja, Membaca, Memasak",
    citacita: "Full Stack Developer",
  },
  {
    no: 2,
    nim: "20232505038",
    nama: "Putri Jasmine",
    gender: "Perempuan",
    prodi: "Teknik Informatika",
    kelas: "TI-4B",
    semester: 4,
    alamat: "Permata Hijau",
    hobby: "Nyanyi, Ballet, Coding",
    citacita: "Programmer Handal",
  },
];

export default function TabelMahasiswa() {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center text-white mb-10 uppercase tracking-wide animate-bounce">
        🎓 Data Mahasiswa 🌟
      </h2>

      {/* Tabel untuk Desktop */}
      <div className="hidden sm:block overflow-x-auto rounded-3xl shadow-2xl border-4 border-white animate-slideUp">
        <table className="min-w-full bg-white rounded-3xl overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-lg">
            <tr>
              {[
                "No",
                "NIM",
                "Nama",
                "Gender",
                "Prodi",
                "Kelas",
                "Semester",
                "Alamat",
                "Hobby",
                "Cita-cita",
              ].map((header) => (
                <th key={header} className="py-4 px-6 text-center uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((mhs, index) => (
              <tr
                key={mhs.nim}
                className={`text-center text-gray-800 transition duration-300 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } hover:bg-indigo-100 hover:scale-105 hover:shadow-xl`}
              >
                <td className="py-4 px-6">{mhs.no}</td>
                <td className="py-4 px-6">{mhs.nim}</td>
                <td className="py-4 px-6 font-semibold">{mhs.nama}</td>
                <td className="py-4 px-6">{mhs.gender}</td>
                <td className="py-4 px-6">
                  <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-sm font-medium">
                    {mhs.prodi}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="bg-pink-200 text-pink-800 py-1 px-3 rounded-full text-sm font-medium">
                    {mhs.kelas}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-sm font-medium">
                    {mhs.semester}
                  </span>
                </td>
                <td className="py-4 px-6">{mhs.alamat}</td>
                <td className="py-4 px-6">{mhs.hobby}</td>
                <td className="py-4 px-6">{mhs.citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🌟 Card untuk Mobile */}
      <div className="sm:hidden grid grid-cols-1 gap-8 animate-fadeInSlow">
        {data.map((mhs) => (
          <div
            key={mhs.nim}
            className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-4 gap-4">
              <User className="text-purple-600" size={32} />
              <h3 className="text-xl font-semibold text-gray-800">{mhs.nama}</h3>
            </div>
            <p className="flex items-center text-gray-600 mb-2">
              <BookOpen className="mr-2 text-indigo-500" /> {mhs.prodi} ({mhs.kelas})
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="mr-2 text-red-500" /> {mhs.alamat}
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <Star className="mr-2 text-yellow-500" /> {mhs.citacita}
            </p>
            <p className="text-sm text-gray-500 italic">Hobby: {mhs.hobby}</p>
          </div>
        ))}
      </div>

      {/* 🎨 Animasi dan Responsif */}
      <style jsx>{`
        @keyframes fadeInSlow {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 1s ease-in-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}