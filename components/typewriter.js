import { useEffect, useState } from "react";

export default function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);


  return (
    <h1 className="text-lg md:text-2xl text-indigo-400 font-medium text-center mb-8" >
    {displayText}
    {showCursor && <span className="ml-2 animate-blink">|</span>}
    </h1>
  );
}
