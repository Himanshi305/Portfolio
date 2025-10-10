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
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-2px, -2px)' }} // Slight offset for better pointer alignment
      >
        {/* Outer Shape */}
        <path
          d="M4 4L28 16L20 20L16 28L4 4Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner Shape */}
        <path
          d="M11.5 11.5L20.5 16L16 20.5L11.5 11.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Vertical line of the 'R' */}
        <path
            d="M16 28V20.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
