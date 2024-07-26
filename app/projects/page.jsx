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
                <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-4xl font-bold sm:text-5xl">
        <span className='text-blue-700'>Master </span>
         Plan
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="masterplan.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <div className="space-y-4 text-gray-600">
          <p>
            Indoor
          </p>
          
          <ol >
            <li>Business Centre and Co-Working Space</li>
            <li>Swimming Pool with Pool Deck</li>
            <li>Air-conditioned Gymnasium</li>
            <li>Yoga & Meditation Room</li>
            <li>Music/Dance/Aerobics Room</li>
            <li>Crèche & Toddlers Play Area</li>
            <li>Community Hall</li>
            <li>Guest Room for Common Use</li>
            <li>Society Administration Office</li>
            <li>Common Toilet Block</li>
            <li>Maid’s Area</li>
            Paddle Pool
Steam and Sauna
Spa
Salon
Mini-theatre
Ladies K.T. Room
Indoor Games Room
Kitchen
Cafeteria
Grocery Store
Driver’s Area
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>





            </div >

        </div>
    )
}

export default ProjectPage