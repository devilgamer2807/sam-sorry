
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
  escapeAttempts = 100,
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

  const moveButton = () => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
    setAttempts(prev => prev + 1);
  };

  const handleMouseEnter = () => {
    moveButton();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  };

  return (
    <button
      ref={buttonRef}
      className={`transition-all duration-75 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'auto'
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </button>
  );
};

export default EscapingButton;
