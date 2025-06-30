
import React, { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
}

interface FloatingHeartsProps {
  isActive: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ isActive }) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    if (!isActive) {
      setHearts([]);
      return;
    }

    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 2000
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 4000 + newHeart.delay);
    }, 500);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart animate-heart-float"
          style={{
            left: `${heart.x}px`,
            animationDelay: `${heart.delay}ms`
          }}
        >
          💖
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
