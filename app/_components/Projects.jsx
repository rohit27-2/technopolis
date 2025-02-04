import Link from 'next/link'
import React from 'react'

function Projects() {
    return (

        <div id='projects' className='mt-8 py-8 flex flex-col items-center'>
            <div className='flex flex-col items-center' >
                <h1 className='mt-8 p-6 text-5xl font-black text-gray-800'><span className='text-blue-700'>Featured </span>Project </h1>
                <p >"Enter Your World Of Endless Luxuries"</p>
            </div >

            <div className='flex gap-9 p-5 sm:mt-2 lg:p-20 md:p-10 sm:p-10 '>
                <div className="relative block rounded-3xl border border-gray-100">
                    <span
                        className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                    >
                        Latest
                    </span>

                    <img
                        src="/main/main3.jpg"
                        alt=""
                        className="h-80 w-full rounded-3xl object-cover"
                    />

                    <div className="p-4 text-center">
                        <strong className="text-xl font-medium text-gray-900"> Solitaire Unity @ Madinaguda </strong>

                        <p className="mt-2 text-pretty text-gray-700">

                            Solitaire Unity @ Madinaguda is the perfect blend of Luxury & Leisure for balanced lifestyle. With futuristic strategies redefined space and beauty.
                        </p>

                        <div className='mt-5 flex gap-3 justify-around'>
                            <div className=' flex flex-col justify-center '>


                                <h2 className='font-bold'>Location</h2>
                                <p className="text-pretty text-gray-700">Madeenaguda Village                            </p>
                            </div>

                            <div className='mt-2 flex flex-col justify-center'>


                                <h2 className='font-bold'>2 & 3 BHK</h2>
                                <p className="text-pretty text-gray-700">Flats       </p>
                            </div>
                            <div className='mt-2 flex flex-col justify-center'>


                                <h2 className='font-bold'>Prices</h2>
                                <p className="text-pretty text-gray-700">On Request                            </p>
                            </div>
                        </div>

                        <Link href={'/projects'}
                            className="mt-4 w-full block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                        >
                            View Project
                        </Link>
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Projects