import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About"
    },
    {
        id:3,
        text:"Portfolio"
    },
    {
        id:4,
        text:"Experiance"
    },
    {
        id:5,
        text:"Contact"
    }
  ]

  return (
    <>
      <div className="max-w-screen-2xl mt-2 container mx-auto px-4 md:px-20 border-t h-16 border-gray shadow-md 
      fixed top-0 left-0 right-0 cursor-pointer z-50 bg-white">
        <div className="flex justify-between h-16 items-center ">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl ">
              SHIVA<span className="text-green-500 text-2xl">M</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            {/* desktop navbar */}
            <ul className="hidden md:flex space-x-8 ">
              {
                navItems.map(({id,text})=>(
                    <li className="hover:scale-105 duraion-300 cursor-pointer" key={id}>
                       <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link> 
                    </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu sixe={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen justify-center items-center space-y-3 text-3xl">
            {
                navItems.map(({id,text})=>(
                    <li className="hover:scale-105 font-semibold duraion-300 cursor-pointer" key={id}>
                        <Link onClick={() => setMenu(!menu)}
                        to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link> 
                    </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
