import ChatBox from '@/app/components/ChatBox';

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center pt-10">🤖 Chatbot Pintar</h1>
      <ChatBox />
    </div>
  );
}
