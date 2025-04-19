"use client";
import React from "react";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

// Type definitions for participant and class data
interface Participant {
  name: string;
  img: string;
}

interface ClassData {
  className: string;
  participants: Participant[];
}

const classData: ClassData[] = [
  {
    className: "Kelas Teman Terbaik",
    participants: [
      {
        name: "Desta Novita Dewi",
        img: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Puja Swara",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        name: "Tiara Hayati",
        img: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Hana Triani",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        name: "Nova Agustina",
        img: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
  },
  {
    className: "Kelas SI2",
    participants: [
      {
        name: "Dede Saefudin",
        img: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        name: "Zildjian Maulana Ibrahim",
        img: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "Athaya Naura",
        img: "https://randomuser.me/api/portraits/women/8.jpg",
      },
      {
        name: "Dere Lovita",
        img: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        name: "Sabrina Anandhita",
        img: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    ],
  },
  {
    className: "Kelas SI 3",
    participants: [
      {
        name: "Fattah Syach",
        img: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Megawati",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Adzana Ashel",
        img: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Davina Karamoy",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      {
        name: "Fattah Syach",
        img: "https://randomuser.me/api/portraits/men/15.jpg",
      },
    ],
  },
];

// ParticipantCard component
const ParticipantCard: React.FC<{ participant: Participant }> = ({
  participant,
}) => (
  <div className="flex flex-col items-center space-y-2 group">
    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-blue-300 shadow-md group-hover:scale-110 transition-transform duration-300">
      <Image
        src={participant.img}
        alt={participant.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <p className="text-xs md:text-sm font-medium text-gray-800 text-center">
      {participant.name}
    </p>
  </div>
);

// ClassCard component
const ClassCard: React.FC<{ kelas: ClassData }> = ({ kelas }) => (
  <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6 hover:shadow-2xl transition-all border border-gray-200">
    <h2 className="text-center text-xl md:text-2xl font-bold text-blue-700">
      {kelas.className}
    </h2>
    <div className="flex justify-center flex-wrap gap-4 md:gap-6">
      {kelas.participants.map((p, i) => (
        <ParticipantCard key={i} participant={p} />
      ))}
    </div>
    <div className="flex justify-center">
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg transition-all">
        <PlusCircle size={20} />
        Assign Peserta Kelas
      </button>
    </div>
  </div>
);

// Main ManageKelas component
const ManageKelas: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 md:p-10 space-y-8 md:space-y-10 grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {classData.map((kelas, index) => (
        <ClassCard key={index} kelas={kelas} />
      ))}
    </div>
  );
};

export default ManageKelas;