'use client';

import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const target = document.elementFromPoint(x, y);
    if (target) {
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    }
  }, [x, y]);

  const scale = isPointer ? 1.2 : 1;
  const rotation = isPointer ? 15 : 0;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-2px, -2px)' }} // Slight offset for better pointer alignment
      >
        <path d="M76.6287 46.6308L62.4993 34.144L62.5 53.0003L62.5058 208L62.5066 229.287L77.1681 213.855L122.261 166.392L188.193 164.895L209.894 164.403L193.629 150.028L76.6287 46.6308Z" fill="white" stroke="black" strokeWidth="17"/>
      </svg>
    </div>
  );
};

export default CustomCursor;
