
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getRandomPosition = () => {
    const maxX = Math.min(window.innerWidth - 200, 400);
    const maxY = Math.min(window.innerHeight - 100, 300);
    return {
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY
    };
  };

  const showRandomMessage = () => {
    const messages = [
      "Chalak mat banniye... maaf kar dijiye na 🙏🥺",
      "Itne chalak mat banniye... please 🙏",
      "Arrey yaar... maaf kar do na 🥺",
      "Please Sam... forgive me 💕"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.className = 'fixed z-50 bg-pink-100 text-pink-800 px-4 py-2 rounded-lg text-sm animate-bounce pointer-events-none';
    messageDiv.style.left = Math.random() * (window.innerWidth - 300) + 'px';
    messageDiv.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(messageDiv);
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (attempts < escapeAttempts) {
      const newPosition = getRandomPosition();
      setPosition(newPosition);
      setAttempts(prev => prev + 1);
      showRandomMessage();
    }
  };

  const handleClick = () => {
    if (attempts >= escapeAttempts) {
      onFinalClick();
    }
  };

  return (
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
  );
};

export default EscapingButton;
