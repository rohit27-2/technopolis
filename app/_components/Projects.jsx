import React from 'react'

function Projects() {
    return (

        <div className='mt-8 p-6 flex flex-col items-center'>
            <div className='flex flex-col items-center' >
                <h1 className='mt-8 p-6 text-5xl font-black text-gray-800'>Luxury  <span className='text-blue-700'>Living, </span>Redefined </h1>
                <p >"Get to know our Previous Projects"</p>
            </div >

            <div className='flex gap-9 mt-8 p-20 '>
                <div className="relative block rounded-3xl border border-gray-100">
                    <span
                        className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                    >
                        Latest
                    </span>

                    <img
                        src="Project.jpg"
                        alt=""
                        className="h-80 w-full rounded-3xl object-cover"
                    />

                    <div className="p-4 text-center">
                        <strong className="text-xl font-medium text-gray-900"> Project Bhoomi </strong>

                        <p className="mt-2 text-pretty text-gray-700">
                            
                            Project Bhoomi is a residential project by Bhoomi Constructions in Hyderabad. It is a registered project and is available for possession from December 2023. The project is spread over a total area of 0.17 acres of land. Project Bhoomi has a total of 1 tower. The construction is of 5 floors. An accommodation of 10 units has been provided.
                        </p>

                        <span
                            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                        >
                            View More
                        </span>
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Projects