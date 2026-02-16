import { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  suffix: string;
  prefixFirst?: boolean; // true = "Prefix Suffix", false = "Suffix Prefix"
  className?: string;
}

const TypingAnimation = ({
  words,
  suffix,
  prefixFirst = true,
  className = "",
}: TypingAnimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words]);

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 49% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0;
            }
          }
          .typing-cursor {
            animation: blink 1s infinite;
            font-weight: 400;
            margin-left: 2px;
          }
        `}
      </style>
      <span className={className}>
        {prefixFirst ? `${currentText} ${suffix}` : `${suffix} ${currentText}`}
      </span>
    </>
  );
};

export default TypingAnimation;
