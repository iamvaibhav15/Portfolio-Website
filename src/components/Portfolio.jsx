import React from 'react'

function Portfolio() {
    const projects = [
        {
            id:1,
            name:"Pizza Sales Analysis",
            logo:" /Image/pizza.jpg",
            description:"Analyzed pizza sales data using MySQL, uncovering key trends and insights & Executed queries to extract valuable insights from the data",
            link:"https://github.com/iamvaibhav15/Pizza-Sales-Analysis"
        },
        {
            id:2,
            name:"DeliverEase",
            logo:" /Image/delivery.webp",
            description:"Utilized Python with Pandas and NumPy for efficient data manipulation and cleaning, resulting instreamlined workflows and accurate insights",
            link:"https://github.com/iamvaibhav15/DeliverEase-Analyzing-Delivery-Partner-Performance"
        },
        {
            id:3,
            name:"Portfolio Website",
            logo:" /Image/portfolio.png",
            description:" Developed a comprehensive portfolio website using ReactJs and Tailwind CSS, featuring an interactiveand responsive design",
            link:"https://github.com/iamvaibhav15/Portfolio-website"
        }] 

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='text-3xl font-bold mb-5'>Portfolio</div>
        <span className='font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-5'>
            {projects.map(({id,name,description,logo,link})=>{
                return <div key={id} className='md:h-[300px] md:w-[300px] p-1 border-[2px] rounded-lg shadow-md shadow-white hover:scale-110 duration-300 cursor-pointer flex flex-col justify-center items-center'>
                <img src={logo} className='h-[120px] w-[160px] p-1 m-1 rounded-xl border-[2px]' alt="card_image" />
                <h1 className='px-2 text-xl font-bold mb-2 text-center'>{name}</h1>
                <p className='text-xs px-2 text-grey-600 text-center'>{description}</p>
                <div className='px-6 py-4 space-x-4 justify-around'>
                    {/* <button className='bg-violet-400 hover:bg-violet-700 text-white px-4 py-2 rounded'>Video</button> */}
                    <button className='bg-violet-400 hover:bg-pink-700 text-white px-4 py-2 rounded'><a href={link} target='_blank'>GitHub Link</a></button>
                </div>
            </div>
            
            })}
        </div>
        <br/><br/>
      <hr/>
    </div>
  )
}

export default Portfolio
