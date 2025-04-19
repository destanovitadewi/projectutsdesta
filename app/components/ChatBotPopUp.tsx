'use client';

import { useState } from 'react';
import ChatBox from './ChatBox';

const ChatBotPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-700"
      >
        💬
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[350px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-xl shadow-xl p-3">
          <div className="flex justify-end mb-2">
            <button onClick={() => setIsOpen(false)} className="text-sm text-gray-500 hover:text-red-500">
              ✖
            </button>
          </div>
          <ChatBox />
        </div>
      )}
    </>
  );
};

export default ChatBotPopUp;
// 