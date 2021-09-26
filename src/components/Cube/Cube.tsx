import React from 'react';

import { useSpring, animated, to } from 'react-spring';

type TProps = {
  variant: 'purple' | 'green' | 'orange';
};

export const Cube: React.FC<TProps> = ({ variant, children }) => {
  const [isOver, setOver] = React.useState(false);
  const angle = isOver ? 210 : 30;
  const styles = useSpring({ angle });

  const boxStyle = {
    transform: to(
      [styles.angle],
      (angleValue) => `rotate3d(1, 1, 1, ${angleValue}deg)`
    ),
  };

  return (
    <animated.div
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      style={boxStyle}
      className={`box bg-${variant}`}
    >
      {Array.from(Array(6)).map((_, idx) => (
        <div key={idx}>{children}</div>
      ))}
    </animated.div>
  );
};
