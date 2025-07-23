import React from 'react'
import pic from "/Image/Hacker.png"
import { HiMenu } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';
import {Link} from 'react-scroll';

function Navbar() {
    const [menu,setMenu] = useState(true);
    const navItems =[{id:1,text:"Home"},{id:2,text:"About"},{id:3,text:"Portfolio"},{id:4,text:"Experience"},{id:5,text:"Contact"}]
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-sm shadow-white h-16 fixed top-0 left-0 right-0 z-index:50 bg-black">
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-5'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="NavbarImage" />
                <h1 className='font-semibold text-xl cursor-pointer'>Vai<span className='text-green-500'>BhaV</span>
                <p className='text-sm'>Web Developer</p></h1>
            </div>
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {navItems.map(({id,text})=>(
                        <li className="relative group hover:scale-110 duration-200 cursor-pointer" key={id}>
                        <Link to={text} smooth={true} duration={500} offset={-100} activeClass="active">
                          {text}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                      </li>
                        ))}
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    { menu ? <HiMenu size={28}/> : <IoMdCloseCircleOutline size={28}/> }
                </div>
            </div> 
        </div>
        <div className='bg-black '>
    
            <div className={menu ? "hidden":"block"}>
                <ul className='md:hidden flex space-y-5 flex-col h-screen items-center justify-center text-2xl'>
                {navItems.map(({id,text})=>(
                        <li className="hover:scale-110 duration-200 cursor-pointer" key={id}><Link onClick={()=>setMenu(!menu)}  to={text} smooth={true} duration ={500} offset={-70} activeClass='active'>{text}</Link></li>
                        ))}
                </ul>
            </div> 
        </div>
     </div>
    </>
  )
}

export default Navbar
