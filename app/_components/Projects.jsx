import React from 'react'

function Projects() {
    return (
        
        <div className = 'mt-8  p-6 flex flex-col items-center'>
            <div  className = 'flex flex-col items-center' >
                <h1 className='mt-8 p-6 text-5xl font-black text-gray-800'>Luxury  <span className='text-blue-700'>Living, </span>Redefined </h1>
                <p >"Get to know our Previous Projects"</p>
            </div >

        <div className='flex gap-9 mt-8 p-20 '>
        <div className=" w-half relative block rounded-tr-3xl border border-gray-100">
            <span
                className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
            >
                Latest
            </span>

            <img
                src="Project.jpg"
                alt=""
                className="-ml-6 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
            />

            <div className="p-4 text-center">
                <strong className="text-xl font-bold text-gray-900 "> Project Bhoomi </strong>

                <p className="mt-2 text-pretty text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                    eum vitae aliquid at sed dignissimos.
                </p>

                <span
                    className="mt-4 block rounded-md border border-blue-900 bg-blue-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-blue-900"
                >
                    Learn More
                </span>
            </div>
        </div>
        
        </div>
        
            
        </div >
    )
}

export default Projects