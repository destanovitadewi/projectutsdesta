import React from "react";
import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-blue-400 via-purple-500 to-indigo-600">
      {/* Container profil dengan efek membesar */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <div
          className="relative w-[20vw] h-[20vw] rounded-full border-[5px] border-white shadow-2xl overflow-hidden
                     transform transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-indigo-400/50"
        >
          <Image
            src="/profile.jpeg" // Ganti dengan path gambar profil kamu
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full transition-all duration-700 hover:blur-sm"
          />
        </div>

        {/* Teks utama (nama) */}
        <h2 className="text-white text-4xl font-bold tracking-wide drop-shadow-lg transition-all duration-500 hover:text-green-300 hover:scale-105">
          Desta Novita Dewi
        </h2>

        {/* Deskripsi di bawah teks utama */}
        <p className="text-white text-base text-center max-w-md opacity-80 px-4 transition-all duration-500 hover:opacity-100 hover:text-yellow-200">
          Passionate about crafting intuitive web experiences, building scalable
          web apps, and exploring emerging technologies.
        </p>
      </div>
    </div>
  );
}