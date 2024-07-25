import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center'>
      <div >
        <h1 className='mt-8 p-6 text-5xl font-black text-gray-800'>About <span className='text-blue-700'>Technopolis</span> </h1>
        
      </div>
      <div>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute border rounded-lg inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative border-r  border-t border-b rounded-lg flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute border-l border-t border-b rounded-l-lg lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                  Discover Your Perfect Home With Us
                  </h2>

                  <p className="mt-4 text-gray-600">
                  Established in 2006, Technopolis Constructions Company Private Limited is a reputed organization that has built several residential and commercial spaces in Hyderabad over the last 16 years. The company's phenomenal portfolio of projects includes a wide range of quality apartment complexes, high-rise towers, and commercial spaces in the heart of the city.
                    </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-blue-600 bg-blue-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-800 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About