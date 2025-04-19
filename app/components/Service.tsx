"use client";

import React from "react";
import {
  Code,
  Server,
  LayoutDashboard,
  ShieldCheck,
  Layers,
  ClipboardList,
} from "lucide-react";

export default function Service() {
  const services = [
    {
      title: "Website Development",
      icon: <Code size={32} className="text-blue-700" />,
      description:
        "Membangun website dinamis dan responsif menggunakan Next.js, React, dan PHP dengan desain modern.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "Database Management",
      icon: <Server size={32} className="text-green-700" />,
      description:
        "Mengelola database MySQL dan MongoDB dengan performa optimal dan keamanan terjamin.",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "UI/UX Design",
      icon: <LayoutDashboard size={32} className="text-pink-700" />,
      description:
        "Menciptakan antarmuka yang intuitif dan menarik dengan prinsip desain terbaik.",
      gradient: "from-pink-500 to-pink-700",
    },
    {
      title: "Cyber Security Consulting",
      icon: <ShieldCheck size={32} className="text-red-700" />,
      description:
        "Memberikan layanan keamanan siber untuk melindungi data dan privasi pengguna.",
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Software Development",
      icon: <Layers size={32} className="text-yellow-700" />,
      description:
        "Mengembangkan perangkat lunak yang scalable dan sesuai kebutuhan bisnis.",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Project Management",
      icon: <ClipboardList size={32} className="text-purple-700" />,
      description:
        "Mengelola proyek teknologi dengan pendekatan Agile dan hasil yang optimal.",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8 text-black">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${service.gradient} rounded-2xl shadow-xl p-5 flex items-center gap-5 hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="bg-white rounded-full p-3 shadow-md">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 360px) {
          div[class*="flex items-center"] {
            flex-direction: column;
            text-align: center;
          }
          div[class*="bg-white"] {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
}
