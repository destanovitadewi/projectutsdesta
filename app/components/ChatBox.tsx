'use client';

import { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Halo! Ada yang bisa saya bantu?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Maaf, terjadi kesalahan.' }]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="h-64 overflow-y-auto p-2 border rounded bg-gray-100 text-black">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Tulis pesan..."
          className="flex-grow px-3 py-2 border rounded-l"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
