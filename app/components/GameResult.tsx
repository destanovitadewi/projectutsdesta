'use client';

interface GameResultProps {
  result: string;
}

const GameResult = ({ result }: GameResultProps) => {
  return <p className="mt-4 text-lg font-semibold">{result}</p>;
};

export default GameResult;
