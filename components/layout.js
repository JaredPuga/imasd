import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";

export default function Layout({ children, title = "", description = "" }) {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, ¿en qué puedo ayudarte?" },
    { id: 2, text: "Estoy buscando información sobre un producto" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    setMessages([...messages, { id: messages.length + 1, text: message }]);
    e.target.message.value = "";
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <Head>
        <title>{`I+D - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header />
      {children}
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleToggleChat}
        >
          Chat
        </button>
      </div>
      {showChat && (
        <div
          className="fixed bottom-20 right-6 z-50 bg-white p-4 border border-gray-300 rounded-lg shadow-md"
        >
        <div className="fixed bottom-20 right-6 z-50 bg-white p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="h-64 overflow-y-scroll">
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className={`${
                  message.id % 2 === 0 ? "text-right" : "text-left"
                } mb-2`}
              >
                <span
                  className={`${
                    message.id % 2 === 0
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } inline-block rounded-full px-4 py-2`}
                >
                  {message.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              name="message"
              className="w-full border rounded py-2 px-3 mr-2"
              placeholder="Escribe un mensaje"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
        </div>
      )}
    </>
  );
}
