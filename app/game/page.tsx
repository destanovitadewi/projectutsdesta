"use client"
import { useState, useEffect } from "react";
import GameInput from "../components/GameInput";
import GameResult from "../components/GameResult";

export default function GamePage() {
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setTarget(randomNum);
  }, []);

  const handleGuess = (guess: number) => {
    if (guess < target) {
      setResult("Terlalu kecil!");
    } else if (guess > target) {
      setResult("Terlalu besar!");
    } else {
      setResult("Selamat! Tebakan kamu benar 🎉");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">🎯 Game Tebak Angka</h1>
      <GameInput onGuess={handleGuess} />
      <GameResult result={result} />
    </div>
  );
}
