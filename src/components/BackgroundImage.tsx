
import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
  children: React.ReactNode;
  overlay?: boolean;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ 
  imageUrl, 
  children, 
  overlay = true,
  className = ""
}) => {
  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${overlay ? 'bg-image-overlay' : ''} ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
