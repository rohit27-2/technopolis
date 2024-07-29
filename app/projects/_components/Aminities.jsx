import React from 'react'
import data from '../data'
function Aminities() {
  return (
    <div>
        <section className="bg-white mt-20">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <span className='text-blue-700'> LIVE THE BEST </span>
                IN THIS Lifetime
              </h2>
              <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                {data.map((item, index) => (
                  <div key={index} className="mb-8 sm:break-inside-avoid">
                    <blockquote className={`rounded-lg ${item.bgColor} p-6 shadow-sm sm:p-8`}>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="mt-0.5 text-lg font-medium text-gray-900">{item.title}</p>
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mt-4 w-full text-gray-700 border rounded-md transition-opacity hover:opacity-90"
                      />
                    </blockquote>
                  </div>
                ))}
              </div>



            </div>

          </section>
    </div>
  )
}

export default Aminities