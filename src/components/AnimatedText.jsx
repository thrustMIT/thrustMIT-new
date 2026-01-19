import { useEffect, useState } from "react";

export const AnimatedText = ({ text, className = "", delay = 0, isActive = true }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (!isActive) {
      setVisibleChars(0);
      return;
    }

    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current++;
        setVisibleChars(current);
        if (current >= text.length) {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, isActive]);

  // Split text into words to prevent breaking
  const words = text.split(" ");
  let charCount = 0;

  return (
    <span className={className} style={{ fontFamily: 'Orbitron, sans-serif' }}>
      {words.map((word, wordIndex) => {
        const wordStart = charCount;
        charCount += word.length;
        const hasSpace = wordIndex < words.length - 1;
        if (hasSpace) charCount++; // account for space

        return (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split("").map((char, charIndex) => {
              const globalIndex = wordStart + charIndex;
              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all duration-300"
                  style={{
                    opacity: globalIndex < visibleChars ? 1 : 0,
                    transform: globalIndex < visibleChars ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${globalIndex * 20}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
            {hasSpace && (
              <span
                className="inline-block transition-all duration-300"
                style={{
                  opacity: wordStart + word.length < visibleChars ? 1 : 0,
                  transform: wordStart + word.length < visibleChars ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${(wordStart + word.length) * 20}ms`,
                }}
              >
                {"\u00A0"}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
};