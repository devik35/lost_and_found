import React from 'react';
import { MdOutlineAttachment } from "react-icons/md";



function ItemPage() {
  return (
    <div className="w-full md:w-[80%] mx-auto p-10 bg-white shadow-lg rounded-lg">
      <form className="grid grid-cols-1 gap-6">
        <div className="flex flex-col items-start">
          <label
            className="text-yellow-400 text-lg font-bold mb-2"
            htmlFor="title">
            Item Name
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none p-2 text-gray-700"
            id="title"
            type="text"
            placeholder="Enter the item name"/>
        </div>
        <div className="flex flex-col items-start">
          <label
            className="text-yellow-400 text-lg font-bold mb-2"
            htmlFor="description">
            Description
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none p-2 text-gray-700"
            id="description"
            type="text"
            placeholder="Enter a short description"
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-yellow-400 text-lg font-bold mb-2"
            htmlFor="placeFound"
          >
            Place Found
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none p-2 text-gray-700"
            id="placeFound"
            type="text"
            placeholder="Where was it found?"
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            className="text-yellow-400 text-lg font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none p-2 text-gray-700"
            id="date"
            type="text"
            placeholder="Enter the date"
          />
        </div>

<div className="flex flex-center items-center my-10">
    <label htmlFor="file" className="flex gap-10">  <MdOutlineAttachment className="text-5xl font-bold text-yellow-400"/> <span className="text-5xl  text-black" >Attach Image  Descriptions</span></label>
<input type="file" id="file" style={{display:"none"}}/>
</div>


        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-white font-bold rounded-md shadow-md hover:bg-yellow-500 transition"
          >
            Post Item
          </button>
        </div>
      </form>
    </div>
  );
}
export default  ItemPage;