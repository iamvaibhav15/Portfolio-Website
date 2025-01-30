import React from 'react'

function Portfolio() {
    const projects = [
        {
            id:1,
            name:"Project 1",
            logo:" ../../public/Image/Hacker.png",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit inventore. Tenetur odit repelle maxime sed voluptas accusamus velit delectus fugit quaerat pariatur."
        },
        {
            id:2,
            name:"Project 2",
            logo:" ../../public/Image/Hacker.png",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum nesciunt mollitia, nostrum ullam omnis inventore.ihil iste nulla sed alias hic quidem a eius ratione inventatur."
        },
        {
            id:3,
            name:"Project 3",
            logo:" ../../public/Image/Hacker.png",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit voluptatum? Illum aut, tenetur maxime sed voluptas accusamus velit delectus fugit quaerat pariatur."
        },
        {
            id:4,
            name:"Project 4",
            logo:" ../../public/Image/Hacker.png",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum nesciunt mollitia, nostrum ullam omnis inventore. Tenetur odit us velit delectus fugit quaerat pariatur."
        },
        {
            id:5,
            name:"Project 3",
            logo:" ../../public/Image/Hacker.png",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit cdb xshcghsd gyasvyvazybqwjabgucdb gsvgydvabcucbs gasbubxhuabbsa guasbubaba."
        }] 

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='text-3xl font-bold mb-5'>Portfolio</div>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-5'>
            {projects.map(({id,name,description,logo})=>{
                return <div key={id} className='md:h-[300px] md:w-[300px] p-1 border-[2px] rounded-lg shadow-md shadow-white hover:scale-110 duration-300 cursor-pointer'>
                    <img src={logo} className='h-[120px] w-[120px] p-1 rounded-full border-[2px]' alt="card_image" />
                    <h1 className='px-2 text-xl font-bold mb-2'>{name}</h1>
                    <p className='text-xs px-2 text-grey-600'>{description}</p>
                    <div className=' px-6 py-4 space-x-4 justify-around'>
                        <button className='bg-violet-400 hover:bg-violet-700 text-white px-4 py-2 rounded'>Video</button>
                        <button className='bg-pink-400 hover:bg-pink-700 text-white px-4 py-2 rounded'>Source Code</button>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Portfolio
