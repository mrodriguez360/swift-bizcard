import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const Typewriter = ({ text, speed = 60, className }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Type characters one by one
  useEffect(() => {
    if (index >= text.length) return;
    const timer = setInterval(() => {
      setIndex((i) => (i < text.length ? i + 1 : i));
    }, speed);
    return () => clearInterval(timer);
  }, [index, text, speed]);

  // Blink cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  const display = text.slice(0, index);

  return (
    <span className={cn("inline-flex items-start whitespace-pre-wrap", className)} aria-label={text}>
      {text}
    </span>
  );
};

export default Typewriter;
