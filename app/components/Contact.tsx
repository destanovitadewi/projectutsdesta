'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0,
  });

  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const res = await fetch('/api/feedback');
    const data = await res.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Terima kasih atas komentar dan rating Anda!');
      setFormData({ name: '', message: '', rating: 0 });
      fetchFeedbacks(); // refresh list
    }
  };
  const ratings = feedbacks
  .map((f: any) => Number(f.rating))
  .filter((r: number) => !isNaN(r));

const averageRating =
  ratings.length > 0
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : 0;


  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          📬 Contact & Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">💬 Kirim Komentar dan Rating</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              required
              className="w-full mb-3 p-3 border rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Komentar Anda"
              required
              className="w-full mb-3 p-3 border rounded"
            />
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full mb-3 p-3 border rounded"
            >
              <option value={0}>Pilih Rating</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Bintang
                </option>
              ))}
            </select>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              <Send size={18} className="inline mr-2" /> Kirim
            </button>
          </form>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-700">📝 Komentar & Rating</h3>
            <p className="mb-4">⭐ Rata-rata rating: <strong>{averageRating}</strong> dari {feedbacks.length} pengguna</p>
            <ul className="space-y-4">
              {feedbacks.map((fb: any, i: number) => (
                <li key={i} className="p-4 bg-white rounded shadow">
                  <p><strong>{fb.name}</strong> ({fb.rating}⭐)</p>
                  <p>{fb.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
