import React from 'react'

function MasterPlan() {
  return (
    <div>
        <section>
          <div className="mx-auto max-w-screen-xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
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
                  className="absolute inset-0 h-full w-full object-cover p-2"
                />
              </div>

              <div className="lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 text-gray-600">
                  <p className='font-bold'>
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
                    <li className='font-bold'>and many more...</li>

                  </ol>
                  <p className='font-bold'>
                    Outdoor
                  </p>

                  <ol >
                    <li>Multipurpose Lawn</li>
                    <li>Landscapes</li>
                    <li>Kids Play Area</li>
                    <li>Zen Garden</li>
                    <li>Multi-purpose Court</li>
                    <li>Jogging Track</li>
                    <li>Meditation Gazebo</li>
                    <li>Senior Citizen Area</li>


                  </ol>
                </div>
              </div>

            </div>
          </div>
          
        </section>
    </div>
  )
}

export default MasterPlan