import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FoundItem() {

const Items=[

{
id:1,
img:"/images/bike-8289452_1280.jpg",
name:"Bike",
placeFound:"Kangaru",
description:"Yellow bike  with two black wheels , Totally Old School",
postedOn:"7/4/2024"
},
{
id:2,
img:"/images/phone-1869510_1280.jpg",
name:"Phone",
placeFound:"Embu Town",
description:"white not full screen old School",
postedOn:"10/2/2024"
},
{
id:3,
img:"/images/banknotes-946395_1280.jpg",
name:"Money",
placeFound:"G-town",
description:"Dollars  20$ in amount normaL width  original",
postedOn:"11/2/2024"
},

]


  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
{

Items.map((item)=>(
    <div className="flex flex-col gap-5 shadow-lg p-10 my-3 bg-white items-center justify-center" key={item.id}>
        <img src={item.img} alt="" className="w-[50vw]" />
        <div className=" flex  flex-col justify-center  gap-5 items-left"> 
        <h1 className='text-3xl font-bold text-black'>Item Name : {item.name}</h1>
        <span className="text-2xl text-black">Posted On:{item.postedOn}</span>
        <h2 className="text-3xl text-gray-600">Place Found : {item.placeFound}</h2>
        <p className="text-2xl  text-black">Description : {item.description}</p>
        
        </div>
        <button className="bg-gray-300 rounded text-black hover:bg-gray-200  px-5 py-3 w-[200px] my-10">CLAIM ITEM</button>
        <span>Know the Owner? Share now</span>
        <div className="flex gap-10">
            <span>
                <FaWhatsapp className="text-3xl font-bold text-gray-900  cursor-pointer hover:text-gray-500"/>
            </span>
            <span>
               <FaFacebook className="text-3xl font-bold text-gray-900  cursor-pointer hover:text-gray-500"/>
            </span>
            <span>
                <FaXTwitter className="text-3xl font-bold text-gray-900  cursor-pointer hover:text-gray-500"/>
            </span>
        </div>
    
    </div>
))

}
    </div>
  )
}

export default FoundItem;