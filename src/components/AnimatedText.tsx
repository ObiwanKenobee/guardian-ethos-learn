
import React, { useEffect, useState, useRef } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  speed = 40,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    let startDelay: NodeJS.Timeout;
    
    if (delay > 0) {
      startDelay = setTimeout(() => {
        animateText();
      }, delay);
    } else {
      animateText();
    }
    
    return () => {
      if (startDelay) clearTimeout(startDelay);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text]);
  
  const animateText = () => {
    setIsAnimating(true);
    setDisplayedText("");
    
    let i = 0;
    const animate = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        timeoutRef.current = setTimeout(animate, speed);
      } else {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }
    };
    
    timeoutRef.current = setTimeout(animate, speed);
  };
  
  return (
    <span className={className}>
      {displayedText}
      {isAnimating && (
        <span className="inline-block w-1 h-5 ml-0.5 bg-guardian-500 animate-subtle-pulse"></span>
      )}
    </span>
  );
};

export default AnimatedText;
