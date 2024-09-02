// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';

// const features = [
//   {
//     id: 1,
//     title: 'Real-Time Incident Monitoring',
//     description: 'Stay informed with live feeds of cyber incidents related to Indian cyberspace, helping you take proactive measures.',
//     side: 'right',
//   },
//   {
//     id: 2,
//     title: 'Threat Analysis & Insights',
//     description: 'Our AI-driven tools analyze collected data to generate valuable insights, highlighting emerging threats and vulnerabilities.',
//     side: 'left',
//   },
//   {
//     id: 3,
//     title: 'Sector-Specific Alerts',
//     description: 'Receive targeted alerts specific to different sectors, including government, finance, healthcare, and more.',
//     side: 'right',
//   },
//   {
//     id: 4,
//     title: 'Visual Data Representation',
//     description: 'Easily comprehend the latest cyber threat landscape with our intuitive visualizations and reports.',
//     side: 'left',
//   },
// ];

// const AnimatedFeature = ({ title, description, side, delay }) => {
//   const animation = useSpring({
//     from: { opacity: 0, transform: `translateX(${side === 'right' ? 100 : -100}px)` },
//     to: { opacity: 1, transform: 'translateX(0px)' },
//     config: { duration: 500 },
//     delay: delay,
//   });

//   return (
//     <animated.div
//       style={animation}
//       className="w-[80%] bg-blue-50 shadow-lg rounded-lg p-6 mx-4 mb-6 border border-blue-300"
//     >
//       <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
//       <p className="text-blue-600 mt-2">{description}</p>
//     </animated.div>
//   );
// };

// const FeaturesSection = () => {
//   return (
//     <section className="py-12 bg-gradient-to-r from-blue-400 via-blue-50 to-blue-400">
//       <div className="container mx-auto px-4 flex flex-wrap justify-center">
//         {features.map((feature, index) => (
//           <AnimatedFeature
//             key={feature.id}
//             title={feature.title}
//             description={feature.description}
//             side={feature.side}
//             delay={index * 300} // Stagger animation timing
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const features = [
  {
    id: 1,
    title: 'Real-Time Incident Monitoring',
    description: 'Stay informed with live feeds of cyber incidents related to Indian cyberspace, helping you take proactive measures.',
    side: 'right',
  },
  {
    id: 2,
    title: 'Threat Analysis & Insights',
    description: 'Our AI-driven tools analyze collected data to generate valuable insights, highlighting emerging threats and vulnerabilities.',
    side: 'left',
  },
  {
    id: 3,
    title: 'Sector-Specific Alerts',
    description: 'Receive targeted alerts specific to different sectors, including government, finance, healthcare, and more.',
    side: 'right',
  },
  {
    id: 4,
    title: 'Visual Data Representation',
    description: 'Easily comprehend the latest cyber threat landscape with our intuitive visualizations and reports.',
    side: 'left',
  },
];

const AnimatedFeature = ({ title, description, side, delay }) => {
  const animation = useSpring({
    from: { opacity: 0, transform: `translateX(${side === 'right' ? 100 : -100}px)` },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 500 },
    delay: delay,
  });

  return (
    <animated.div
      style={animation}
      className={`w-[60%] bg-blue-50 shadow-lg rounded-lg p-6 mx-4 mb-6 border border-blue-300 ${side === 'left' ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
    >
      <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      <p className="text-blue-600 mt-2">{description}</p>
    </animated.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-700 via-blue-100 to-blue-700">
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <AnimatedFeature
            key={feature.id}
            title={feature.title}
            description={feature.description}
            side={feature.side}
            delay={index * 300} // Stagger animation timing
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
