import React from "react";
import html from "/Image/html.png";
import css from "/Image/css.png";
import mysql from "/Image/mysql.png";
import javascript from "/Image/javascript.png";
import express from "/Image/express.png";
import monogodb from "/Image/mongodb.jpg";
import react from "/Image/react.webp";
import node from "/Image/node.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id:5,
      logo: node,
      name: "NodeJS"
    },
    {
      id: 6,
      logo: express,
      name: "ExpressJS",
    },
    {
      id:7,
      logo: monogodb,
      name: "MongoDB"
    },
    {
      id:8,
      logo: mysql,
      name: "MySQL"
    }
    
    
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;