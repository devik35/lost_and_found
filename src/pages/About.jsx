import React from 'react';

function About() {
  return (
    <div
      style={{
        backgroundImage: "url('images/lake-3934573_640.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative flex justify-center items-center"
    >

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-5">
        <h1 className="text-4xl md:text-6xl text-yellow-400 font-bold mb-6">TrackMyLost</h1>
        <p className="text-lg md:text-xl w-[500px]">
        A Track My Lost search platform is a user-friendly website designed to help
          people reunite with their lost belongings. Users can post details about items
          they've lost or found, browse listings, and connect with others to return or
          retrieve items. The platform simplifies the process of locating misplaced
          items, promoting trust and community collaboration.
          Thank you for using our website.
        </p>
      </div>
    </div>
  );
}

export default About