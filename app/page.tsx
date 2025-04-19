'use client';
import { useState, useEffect } from 'react';
import Skill from "./components/skill";
import Portfolio from "./portfolio/page";
import Contact from "./components/Contact";
import ChatBotPopUp from "./components/ChatBotPopUp";
import GameInput from "./components/GameInput";
import GameResult from "./components/GameResult";

export default function ProfilePage() {
  const [target, setTarget] = useState(0);
  const [result, setResult] = useState('');
  const [clue, setClue] = useState('');

  // Generate target dan clue saat pertama kali render
  useEffect(() => {
    const randomTarget = Math.floor(Math.random() * 10) + 1;
    setTarget(randomTarget);

    const parity = randomTarget % 2 === 0 ? 'genap' : 'ganjil';
    const rangeClue = randomTarget > 5 ? 'lebih dari 5' : '5 atau kurang';

    setClue(`🔍 Angka yang dicari adalah bilangan ${parity} dan ${rangeClue}.`);
  }, []);

  const handleGuess = (guess: number) => {
    if (guess === target) {
      setResult(`🎉 Benar! Angkanya memang ${target}`);
    } else {
      setResult(`❌ Salah! Kamu menebak ${guess}, yang benar ${target}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-200 p-8">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="text-black px-6 py-8">
          <section className="mb-6">
            <Skill />
          </section>
          <Portfolio />
          <Contact />
          <ChatBotPopUp />

          {/* Game Centered */}
          <div className="mt-12 flex flex-col items-center justify-center bg-gray-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              🎮 Tebak Angka 1 - 10
            </h2>
            <p className="mb-4 text-gray-700 text-center">{clue}</p>
            <GameInput onGuess={handleGuess} />
            <GameResult result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
