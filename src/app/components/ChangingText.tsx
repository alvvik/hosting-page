"use client";

import { useState, useEffect } from "react";

interface ChangingTextProps {
  texts: String[];
  intervalTime?: number;
}

export default function ChangingText({
  texts = [""],
  intervalTime = 3000,
}: ChangingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="transition-all duration-500 ease-in-out">
      {texts[index]}
    </span>
  );
}
