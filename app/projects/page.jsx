import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'

function ProjectPage() {
    return (
        <div>
            <Header />
            <div className='mt-8 '>
                <div className='flex flex-col items-center' >

                    <img src="solitaire-logo.jpg" alt="" />

                    <h1 className=' mt-8 p-6 md:p-8 text-5xl font-black text-gray-800'>Immerse  <span className='text-blue-700'>YOURSELF, </span>In An <span className='text-blue-700'>Elite</span> Lifestyle </h1>
                    <center>
                        <p className='px-10 py-4 text-gray-500'>Solitaire Unity has been designed and crafted to delivery incredible living experiences that bring comfort and joy to every member of your family. <br /> Indulge in the life of your dreams right here.</p>
                    </center>
                </div >
                <div className="mt-8 sm:mt-12 px-20 mr-12 ml-12 py-5">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                        <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <dt className=" text-lg font-medium text-gray-500">Gated Community</dt>

                            <dd className="text-3xl font-extrabold text-blue-700 md:text-4xl">2.24 Acers</dd>
                        </div>

                        <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <dt className=" text-lg font-medium text-gray-500">Units of  2 & 3 BHK</dt>

                            <dd className="text-3xl font-extrabold text-blue-700 md:text-4xl">352</dd>
                        </div>

                        <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <dt className=" text-lg font-medium text-gray-500">SFT AREAS</dt>

                            <dd className="text-3xl font-extrabold text-blue-700 md:text-4xl">1225 - 2230</dd>
                        </div>
                        <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <dt className="text-lg font-medium text-gray-500">SFT Clubhouse</dt>

                            <dd className="text-3xl font-extrabold text-blue-700 md:text-4xl">32,000</dd>
                        </div>
                    </dl>
                </div>





            </div >

        </div>
    )
}

export default ProjectPage