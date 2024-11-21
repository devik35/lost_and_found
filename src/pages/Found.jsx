import React from 'react'
import FoundItem from '../components/FoundItem';

function Found() {
  return (
    <div className="w-full h-auto bg-gray-200">  
    <h1 className="text-yellow text-6xl font-bold p-10 text-center text-yellow-500">Found Items</h1>
        <FoundItem/>
    </div>
  )
}

export default Found;