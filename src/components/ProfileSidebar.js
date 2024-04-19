import React from 'react';
import Typical from 'react-typical';

const ProfileSidebar = () => {
  return (
    <div className="flex flex-col justify-center h-full text-gray-800 p-4">
      <h2 className="text-2xl lg:text-3xl font-light">I'm</h2>
      <h1 className="text-4xl lg:text-6xl font-bold">ALBERTO LINDE</h1>
      <p className="text-xl lg:text-2xl font-light mb-4">Backend Developer & Squad Lead Apprentice</p>
      <Typical
        steps={ [
          'Coffee Enthusiast', 1000,
          'Lifelong Learner', 1000,
          'Video Game Lover', 1000,
          'Technology Enthusiast', 1000,
          'Mechanical Keyboard Builder', 1000
        ] }
        loop={ Infinity }
        wrapper="p"
        className="text-xl lg:text-2xl"
      />
    </div>

  );
};

export default ProfileSidebar;
