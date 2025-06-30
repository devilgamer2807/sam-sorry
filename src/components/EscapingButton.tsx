
import React, { useState, useRef } from 'react';

interface EscapingButtonProps {
  children: React.ReactNode;
  onFinalClick: () => void;
  escapeAttempts?: number;
  className?: string;
}

const EscapingButton: React.FC<EscapingButtonProps> = ({ 
  children, 
  onFinalClick, 
  escapeAttempts = 5,
  className = ""
}) => {
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showWarning, setShowWarning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getRandomPosition = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    return {
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    };
  };

  const handleMouseEnter = () => {
    if (attempts < escapeAttempts) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    }
  };

  const handleClick = () => {
    if (attempts < escapeAttempts) {
      const newPosition = getRandomPosition();
      setPosition(newPosition);
      setAttempts(prev => prev + 1);
      
      // Show popup warning
      alert("Chalak mat banniye... please, sorry na 🙏🥺");
    } else {
      onFinalClick();
    }
  };

  return (
    <div className="relative">
      {showWarning && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-pink-100 text-pink-800 px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-pulse z-50">
          Itne chalak mat banniye... maaf kar dijiye na 🙏
        </div>
      )}
      <button
        ref={buttonRef}
        className={`transition-all duration-300 ease-out ${className}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default EscapingButton;
