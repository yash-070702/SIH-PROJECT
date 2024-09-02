import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Speedometer = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));

  // Adjust radius and circumference for bigger circles
  const radius = 85; // Larger radius
  const outerStrokeWidth = 20; // Width of the outer circle
  const innerStrokeWidth = 10; // Reduced width for the animated inner circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * clampedPercentage) / 100;

  const { dashoffset } = useSpring({
    dashoffset: strokeDashoffset,
    from: { dashoffset: circumference },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setAnimatedPercentage(0); // Reset animation to start from 0
    const timeout = setTimeout(() => {
      setAnimatedPercentage(clampedPercentage); // Animate to the target percentage
    }, 100); // Slight delay to ensure animation starts properly
    return () => clearTimeout(timeout);
  }, [percentage, clampedPercentage]);

  return (
    <div className="flex justify-center items-center">
      <svg className="w-48 h-48" viewBox="0 0 200 200"> {/* Adjusted viewBox for larger size */}
        {/* Outer Circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="white"
          strokeWidth={outerStrokeWidth}
          fill="none"
          
        />
        {/* Animated Inner Circle */}
        <animated.circle
          cx="100"
          cy="100"
          r={radius}
          stroke="blue"
          strokeWidth={innerStrokeWidth} // Reduced width for the animated circle
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: dashoffset }}
          transform="rotate(-90 100 100)"
        />
        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="40" // Larger font size for visibility
          fill="black"
          className="font-medium"
        >
          {(clampedPercentage)}%
        </text>
      </svg>
    </div>
  );
};

export default Speedometer;
