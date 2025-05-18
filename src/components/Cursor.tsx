import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button')) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    // Check if we're on a device that can hover
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (hasHover) {
      addEventListeners();
      return () => removeEventListeners();
    }
    
    return undefined;
  }, []);

  // Skip rendering on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 transition-transform duration-300 flex items-center justify-center ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{ 
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          mixBlendMode: 'difference',
          backgroundColor: linkHovered ? 'transparent' : 'white',
          border: linkHovered ? '2px solid white' : 'none'
        }}
      />
      <div
        className={`fixed top-0 left-0 w-40 h-40 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-exclusion ${
          hidden ? 'opacity-0' : 'opacity-30'
        } ${linkHovered ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.5 : 0.15})`,
          backgroundColor: 'white',
          transition: 'opacity 0.3s ease, transform 0.2s ease-out',
        }}
      />
    </>
  );
};

export default Cursor;