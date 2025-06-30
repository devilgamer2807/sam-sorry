
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
  escapeAttempts = 100, // Set to a high number so it's essentially unclickable
  className = ""
}) => {
  const [attempts, setAttempts] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getRandomPosition = () => {
    const maxX = Math.min(window.innerWidth - 200, 600);
    const maxY = Math.min(window.innerHeight - 100, 400);
    return {
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY
    };
  };

  const handleMouseEnter = () => {
    // Always move the button on hover, making it unclickable
    const newPosition = getRandomPosition();
    setPosition(newPosition);
    setAttempts(prev => prev + 1);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent any click from working
    e.preventDefault();
    e.stopPropagation();
    
    // Move the button even if somehow clicked
    const newPosition = getRandomPosition();
    setPosition(newPosition);
  };

  return (
    <button
      ref={buttonRef}
      className={`transition-all duration-100 ease-out ${className}`} // Faster transition
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'auto' // Keep pointer events but prevent actual clicking
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onPointerDown={handleClick} // Prevent pointer down as well
      onTouchStart={handleClick} // Prevent touch start
    >
      {children}
    </button>
  );
};

export default EscapingButton;
