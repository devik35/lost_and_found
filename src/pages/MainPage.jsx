import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="flex flex-col md:flex-row">
    
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex justify-center items-center text-center bg-gray-100">
        <img
          src="/images/woman-8473560_1280.jpg"
          className="p-5 md:p-10 rounded-xl max-w-full max-h-full"
          alt="Person holding lost items"
        />
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex flex-col gap-6 md:gap-10 items-center justify-center p-5 bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center">
          Track My Lost
        </h1>
        <p className="text-gray-700 text-lg md:text-xl text-center px-2 md:px-10">
          A Track My Lost search platform is a user-friendly website designed to help
          people reunite with their lost belongings. Users can post details about items
          they've lost or found, browse listings, and connect with others to return or
          retrieve items. The platform simplifies the process of locating misplaced
          items, promoting trust and community collaboration.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="/i"><button className="px-5 py-2 bg-black text-yellow-400 shadow-md rounded-[15px] hover:bg-white transition">
            Post Found Item
          </button></Link>
          <Link to="/f"><button className="px-5 py-2 bg-black text-yellow-400 shadow-md rounded-[15px] hover:bg-white transition">
            See Found Items
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;