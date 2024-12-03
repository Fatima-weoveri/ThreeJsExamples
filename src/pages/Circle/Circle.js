import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Circle({ children, reverse = false }) {
  const [offset, setOffset] = useState(0);

  const { transform } = useSpring({
    transform: `rotate(${reverse ? -offset : offset}deg)`,
    config: { tension: 10, friction: 20 }
  });

  // Handle scroll event
  const handleScroll = () => {
    setOffset(window.scrollY * 0.1);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <animated.div className="circle" style={{ transform }}>{children}</animated.div>;
}

function AlphabetCircle() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const layers = 5; // Number of layers of circles

  return (
    <div className="container">
      {[...Array(layers)].map((_, i) => (
        <Circle key={i} reverse={i % 2 !== 0}>
          {alphabets.split('').map((letter, index) => (
            <span key={index} style={{ position: 'absolute', transform: `rotate(${360 / alphabets.length * index}deg) translateX(140px)` }}>
              {letter}
            </span>
          ))}
        </Circle>
      ))}
    </div>
  );
}

export default AlphabetCircle;
