
import React, { useEffect, useState } from 'react';

interface FloatingMessage {
  id: number;
  text: string;
  x: number;
  y: number;
  direction: string;
  fontSize: number;
  color: string;
  fontFamily: string;
}

interface FloatingMessagesProps {
  messages: string[];
  isActive: boolean;
  onStop: () => void;
  colors?: string[];
}

const FloatingMessages: React.FC<FloatingMessagesProps> = ({ 
  messages, 
  isActive, 
  onStop,
  colors = ['#FF69B4', '#DDA0DD', '#FFB6C1', '#FF1493', '#DA70D6']
}) => {
  const [floatingMessages, setFloatingMessages] = useState<FloatingMessage[]>([]);
  const [messageCount, setMessageCount] = useState(0);

  const directions = [
    'animate-float-in-left',
    'animate-float-in-right', 
    'animate-float-in-top',
    'animate-float-in-bottom',
    'animate-float-in-diagonal-tl',
    'animate-float-in-diagonal-tr',
    'animate-float-in-diagonal-bl',
    'animate-float-in-diagonal-br'
  ];

  const fontFamilies = ['font-dancing', 'font-caveat', 'font-sans', 'font-serif'];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (messageCount >= 1000) {
        onStop();
        return;
      }

      const newMessage: FloatingMessage = {
        id: Date.now() + Math.random(),
        text: messages[Math.floor(Math.random() * messages.length)],
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 100),
        direction: directions[Math.floor(Math.random() * directions.length)],
        fontSize: Math.random() * 20 + 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
      };

      setFloatingMessages(prev => [...prev, newMessage]);
      setMessageCount(prev => prev + 1);

      // Remove message after animation
      setTimeout(() => {
        setFloatingMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
      }, 3000);
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, messageCount, messages, onStop, colors]);

  return (
    <>
      {floatingMessages.map((message) => (
        <div
          key={message.id}
          className={`floating-message ${message.direction} ${message.fontFamily}`}
          style={{
            left: `${message.x}px`,
            top: `${message.y}px`,
            fontSize: `${message.fontSize}px`,
            color: message.color,
          }}
        >
          {message.text}
        </div>
      ))}
    </>
  );
};

export default FloatingMessages;
