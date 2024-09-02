import React from 'react';

const CentralCircle = ({ text, top, left }) => (
  <div
    className="w-80 h-80 bg-blue-900 text-white rounded-full flex items-center justify-center font-serif shadow-2xl shadow-blue-500 font-bold text-[50px] z-10 absolute"
    style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
  >
    {text}
  </div>
);

const FeatureCircle = ({ text, angle, distance }) => (
  <div
    className="w-52 h-52 bg-blue-600 shadow-xl shadow-blue-950 text-white rounded-full flex items-center justify-center font-bold text-[30px] absolute font-playfair"
    style={{
      transform: `rotate(${angle}deg) translateY(-${distance}px) rotate(-${angle}deg)`,
      top: '50%',
      left: '50%',
      transformOrigin: 'center',
    }}
  >
    {text}
  </div>
);

const CircleWithArrows = () => {
  return (
    <section className="relative flex flex-col items-center py-16">
      <div className="relative w-full h-[700px] flex justify-center items-center">
        {/* Central Circle */}
        <CentralCircle text="ThreatLens" top={70} left={50} />

        {/* Feature Circles */}
        <FeatureCircle text="Protect" angle={120} distance={220} />
        <FeatureCircle text="Monitor" angle={255} distance={420} />
        <FeatureCircle text="Watch" angle={340} distance={320} />
      </div>
    </section>
  );
};

export default CircleWithArrows;
