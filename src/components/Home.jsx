import React from 'react'
import pic from "/Image/NavbarPic.jpg"
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

function Home() {
    const socialMedia = [{id:1,icon:<FaFacebook size={28}/>,link:"https://www.facebook.com"},{id:2,icon:<BsLinkedin size={28}/>,link:"https://www.linkedin.com"},{id:3,icon:<BsYoutube size={28}/>,link:"https://www.youtube.com"},{id:4,icon:<FaTelegram size={28}/>,link:"https://www.telegram.com"}]

    const skills = [{id:1,icon:<FaReact size={28} />},{id:2,icon:<SiExpress size={28} />},{id:3,icon:<SiMongodb size={28} />},{id:4,icon:<SiPython size={28} />},{id:5,icon:<RiJavascriptFill size={28} />}]
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row' >
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-2 md:space-x-3 text-2xl md:text-4xl'>
                    <h1>Hello! I'm a </h1>
                    {/* <span className='text-blue-300 font-bold'> Developer</span> */}
                    <ReactTyped
                        className='text-violet-500 font-bold'  
                        strings={["Developer","Freelancer","Designer","Programmer","Engineer"]}
                        typeSpeed={80}
                        backDelay={1000}
                        backSpeed={80}
                        loop={true}
                        />
                </div>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum nesciunt mollitia, nostrum ullam omnis inventore. Tenetur odit repellendus eligendi dignissimos necessitatibus unde nihil iste nulla sed alias hic quidem a eius ratione inventore, aperiam sint eaque voluptatum? Illum aut, tenetur maxime sed voluptas accusamus velit delectus fugit quaerat pariatur.
                </p>
                <br />
                <div className='flex flex-col justify-between items-center space-y-6 md:space-y-0 md:flex-row'>
                    <div className='space-y-3'>
                        <h1 className='font-bold text-center'>Available on</h1>
                        <ul className='flex space-x-3'>
                            {socialMedia.map(({id,icon,link})=>
                                <a target="_blank" href={link}><li key={id} className='hover:scale-110 duration-200 rounded-full cursor-pointer'>{icon}</li></a>
                            )}
                        </ul>
                    </div>

                    <div className='space-y-3'>
                        <h1 className='font-bold text-center'>Working on</h1>
                        <ul className='flex space-x-3'>
                            {skills.map(({id,icon})=>
                                <li key={id} className='hover:scale-110 duration-200 rounded-full cursor-pointer'>{icon}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2 mt-8 md:mt-0 md:pt-8 md:pl-40 order-1'>
                <img src={pic} alt="Right-section-image" className='rounded-full w-[450px] h-[450px] md:h-[550px]' />
            </div>
        </div>
        <br/>
        <hr/>
      </div>
    </>
  )
}

export default Home