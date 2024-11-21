import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";


function Navbar() {


  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center">
<div className="p-5">
    <h1 className="text-5xl font-bold text-yellow-400">TrackMyLost</h1>
</div>
<div className="px-10 flex gap-10">
<Link to="/m">Main</Link>
<Link to="/f">Found Item</Link>
<Link to="/a">About</Link>
</div>

<div className="px-10">
<CgProfile   className="text-3xl font-bold cursor-pointer" />
</div>

    </div>
  )
}

export default Navbar