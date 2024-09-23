'use client'

import React, { useState, useEffect } from 'react';

const messages = [
  "Lista de presentes",
  "Como chegar",
  "Sugestão de hotel",
  "Sugestão de transporte",
  "Galeria de fotos"
];

export default function AnimatedMessages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the initial appearance by 1 second
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Start rotating messages after 3 seconds (1 second delay + 2 seconds for first message)
    const rotationDelay = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 2000);

      return () => clearInterval(timer);
    }, 3000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(rotationDelay);
    };
  }, []);

  return (
    <div className="h-20 relative overflow-hidden rounded-lg">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
            isVisible && index === currentIndex
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-full'
          }`}
        >
          <span className="text-gray-600 text-xl font-semibold drop-shadow-lg">
            {message}
          </span>
        </div>
      ))}
    </div>
  );
}