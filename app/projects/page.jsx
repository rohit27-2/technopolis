"use client"
import data from './data'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import { ArrowBigLeftDashIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'


const data1 = [
  {
    question: 'DOORS, WINDOWS & RAILINGS',
    answer: `
    Main Door: Manufactured Teak Veneered door frame & shutter finished with good quality melamine polish and hardware of reputed make.
    Internal Doors: Manufactured hard wood door frame & laminated shutter and hardware of reputed make.
    Toilet Doors: Manufactured hard wood door frame & laminated shutter and hardware of reputed make.
    Utility Door: Manufactured hard wood door frame & laminated shutter and hardware of reputed make.
    French Doors: UPVC Door Frame of Reputed Profile Sections, with Clear Glass Paneled Shutters and Designer Hardware.
    Windows: UPVC Window frame of Reputed Profile Sections with Clear Glass with Suitable Finishes as per Design.
    Balcony Railings: Elegantly Designed Glass Railings.
    Staircase railings: Elegantly Designed MS Railings.
  `,
    "bgColor": "bg-white"
  },
  {
    question: 'ELEVATORS / LIFTS',
    answer: `
    Passenger Lifts
    High-speed automatic passenger lifts of Otis / Schindler / Kone or equivalent with rescue device with V3F for energy efficiency.
  `,
    "bgColor": "bg-blue-50"
  },
  {
    question: 'KITCHEN',
    answer: `
    Counter: Granite Platform with Stainless Steel Sink of Nirali or equivalent make.
    Water Provision: Municipal and bore well water supply.
    Provision for fixing of Water Purifier & Exhaust Fan.
  `,
    "bgColor": "bg-white"
  },
  {
    question: 'ELECTRICAL FIXTURES',
    answer: `
    Concealed Copper Wiring of reputed make (Polycab / Vinay / RR).
    Power outlets for Air Conditioners in all rooms.
    Plug points for T.V. & Audio Systems etc. in drawing room and master bedroom.
    3 phase Supply for each unit with individual meter boards.
    Miniature Circuit Breakers (MCB) for each distribution boards of reputed make.
    Switches of reputed make (Legrand / Vinay / GM).
    Copper piping for Air Conditioning Units for all flats. (To be decided).
    Power outlets for Geysers in all bathrooms.
    Power plug for Cooking Range Chimney, Refrigerator, Microwave Ovens, Mixer / Grinders in Kitchen, Washing Machine in Utility Area.
  `,
    "bgColor": "bg-blue-50"
  },
  {
    question: 'FLOORING',
    answer: `
    Drawing, Living, Dining & all Bedrooms: 800 x 800 Vitrified Tiles of Kajaria / Nexion / Simpolo or equivalent make.
    Entrance Lounge: Marble finish vitrified tiles of Kajaria / Nexion / Simpolo.
    Bathrooms: Anti-skid vitrified / ceramic tiles on floor.
    Corridors: 600 x 1200 Vitrified Tile of Kajaria / Nexion / Simpolo / Johnson or equivalent make.
    All Balconies: Anti-Skid Vitrified tiles of Kajaria / Simpolo / Johnson or equivalent make.
    Utility: Anti-Skid Vitrified tiles of Kajaria / Nexion or equivalent make.
    Staircase: Granite finish / tile / kota.
  `,
    "bgColor": "bg-white"
  },
  {
    question: 'PLASTERING',
    answer: `
    2 Coats of Plaster for External Walls.
    1 Coat of Plaster for Internal Walls.
  `,
    "bgColor": "bg-blue-50"
  },
  {
    question: 'PAINTING',
    answer: `
    External: Two Coats of Exterior Emulsion Paint of Asian Paints / Jotun with partly texture finish.
    Internal: Smooth putty finish with 2 Coats of Premium Acrylic Emulsion Paint of reputed make.
  `,
    "bgColor": "bg-white"
  },
  {
    question: 'TELECOMMUNICATIONS, CABLE TV & INTERNET',
    answer: `
    Intercom Facility: Intercom facility to all the units connecting Security.
    Cable TV: Provision for Cable Connection in Drawing, Living and Master Bedroom.
    Internet: Provision for Internet Connection in Drawing and Master Bedroom.
  `,
    "bgColor": "bg-blue-50"
  },
  {
    question: 'TILE CLADDING',
    answer: `
    Dado in Kitchen: 600 x 600 Vitrified Tiles dado of Kajaria/ Simpolo / Johnson or equivalent make, up to 2’-0” height above kitchen platform
    Manufactured Hard Wood Door Frame & Laminated Shutter and Hardware of Reputed Make.
    Utility: 300 x 600 Vitrified/ceramic tile Dado up to 3’ Height of Kajaria / Simpolo / Johnson.
  `,
    "bgColor": "bg-white"
  },
  {
    question: 'CP & SANITARY FIXTURES',
    answer: `
    Bathrooms
    Vanity type Wash Basin / Granite counter Top of Jaquar or equivalent make.
    EWC with Couple closet of Jaquar or equivalent make.
    Single Lever diverter for mixer and shower of Jaquar or equivalent make.
    All C.P. Fittings are of Jaquar or equivalent make.
  `,
    "bgColor": "bg-blue-50"
  },
  {
    question: 'POWER BACK UP',
    answer: `
    100% DG set backup with acoustic enclosure & A.M.F.
  `,
    "bgColor": "bg-white"
  }
];

function ProjectPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <div>
      {/* <NavBar /> */}
      <div id='nav'>
        <header className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-blue-600" href="#">
                  <span className="sr-only">Home</span>
                  <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <Link href="/" className="py-5 px-3 flex gap-2 cursor-pointer hover:text-purple-700"><ArrowBigLeftDashIcon />  Back</Link>

                </nav>

                <div className="flex items-center gap-4">


                  <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      {isOpen ? <X className='h-6 w-6' /> : <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      }
                    </button>
                  </div>

                </div>

              </div>

            </div>
            <div div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
              <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</Link>

            </div >
          </div>
        </header>
      </div>
      {/* <ProjectHero /> */}
      <div className='mt-8 '>
        <div className='flex flex-col items-center px-10' >

          <img src="solitaire-logo.jpg" alt="" />
          <p className='text-gray-500'>TS RERA PROJECT NO: P02400003285</p>

          <h1 className=' mt-8 p-6 md:p-8 text-5xl font-black text-gray-800'>Immerse  <span className='text-blue-700'>YOURSELF, </span>In An <span className='text-blue-700'>Elite</span> Lifestyle </h1>
          <center>
            <p className='px-10 py-4 text-gray-500'>Solitaire Unity has been designed and crafted to delivery incredible living experiences that bring comfort and joy to every member of your family. <br /> Indulge in the life of your dreams right here.</p>
          </center>
        </div >
        <div className="mt-8 sm:mt-12 px-20    py-5">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className=" text-lg font-medium text-gray-500">Gated Community</dt>

              <dd className="text-xl font-extrabold text-blue-700 lg:text-4xl">2.24 Acers</dd>
            </div>

            <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className=" text-lg font-medium text-gray-500">Units of  2 & 3 BHK</dt>

              <dd className="text-2xl font-extrabold text-blue-700 md:text-4xl sm:text-2xl">352</dd>
            </div>

            <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className=" text-lg font-medium text-gray-500">SFT AREAS</dt>

              <dd className="text-2xl font-extrabold text-blue-700  md:text-4xl">1225 - 2230</dd>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="text-lg font-medium text-gray-500">SFT Clubhouse</dt>

              <dd className="text-2xl font-extrabold text-blue-700 md:text-4xl">32,000</dd>
            </div>
          </dl>
        </div>






      </div >
      {/* <MasterPlan /> */}
      <section>
        <div className="mx-auto max-w-screen-xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold sm:text-5xl">
              <span className='text-blue-700'>Master </span>
              Plan
            </h2>
          </div>

          <div className="border rounded-md p-10 mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
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
      {/* <FloorPlans /> */}
      <div className='sm:px-20 md:px-20 px-5'>
        <h2 className="text-4xl font-black sm:text-5xl">
          <span className='text-blue-700'>2D & 3D </span>
          Floor Plan
        </h2>
        <div className='mt-8'>
          <div className='border rounded-md'>
            <img src="2dplan.jpg" alt="" />
          </div>
          <div className='sm:px-20 md:px-10 py-2 mt-5 border rounded-md'>
            <img src="3dplan.jpeg" alt="" className='border rounded-lg' />
          </div>
        </div>
      </div>
      {/* <Features /> */}
      <div className='sm:px-15 md:px-20 px-5 mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md  hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-6 md:p-8 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'><span className=' text-blue-700'>BLESSED LUXURY</span> Living </h1>
            <p>Sometimes, life throws an opportunity of comfort and prosperity your way. Solitaire Unity is one such beautiful opportunity. Indulge in a lifelong experience of ease and luxury that enhances and nurtures your lifestyle.</p>
          </div>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md bg-blue-50 hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-6 md:p-8 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'>EMBRACE A LIFE OF<span className=' text-blue-700'> COMFORT AND LUXURY</span>  </h1>
            <p>The 352 – 2 & 3 BHK luxurious apartments have been smartly designed to not only bring out the best in you but to fortify the happiness of your family with the top-notch comfort of living that they deserve. Enjoy each moment with your loved ones, not stressing about the future because with the right investment choice, you have made your tomorrow secure.</p>
          </div>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md  hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-6 md:p-8 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'><span className=' text-blue-700'>LIVE CONNECTED</span> Everything </h1>
            <p>Spread across 2.24 acres in Kondapur, Solitaire Unity lets you live connected to facilities you need. Enjoy easy access to the best educational institutes, offices, hospitals, entertainment centres and so much more. Live in the middle of excitement right here at Solitaire Unity</p>
          </div>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md bg-blue-50 hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-6 md:p-5 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'>WHERE <span className=' text-blue-700'>MEMORIES</span> Live Forever</h1>
            <p>The impeccable quality at every step of the construction process along with smartly integrated amenities ensures you a comfortable living. With worldclass infrastructural technology, your home here is a space that lasts for generations to come.</p>
          </div>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md  hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-2 md:p-8 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'>LUXURY THAT CATERS TO EVERY<span className=' text-blue-700'> Loved one</span>  </h1>
            <p>Sometimes, life throws an opportunity of comfort and prosperity your way. Solitaire Unity is one such beautiful opportunity. Indulge  a lifelong experience of ease and luxury that enhances and nurtures your lifestyle.</p>
          </div>
          <div className='flex flex-col justify-around border rounded-lg p-5 text-center  border-gray-100 shadow-md bg-blue-50 hover:border-blue-400 cursor-pointer  '>
            <h1 className=' mt-8 p-6 md:p-8 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black'><span className=' text-blue-700'>LIVE A LIFE </span> Crafted for comfort </h1>
            <p>The impeccable quality at every step of the construction process ensures that your home here is a space that lasts for generations to come.</p>
          </div>


        </div>
      </div>
      {/* <Aminities /> */}
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
      {/* <Specifications /> */}
      <div className='sm:px-20 md:px-20 px-5'>
        <h2 className="text-4xl font-bold sm:text-5xl">
          <span className='text-blue-700'>Specifications </span>

        </h2>
        <div className="mt-8 divide-y divide-gray-100 rounded-xl  bg-white">
          {data1.map((item, index) => (
            <details key={index} className={`group p-6 [&_summary::-webkit-details-marker]:hidden ${item.bgColor} border rounded-lg  `}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 ">
                <h2 className="text-lg font-medium">{item.question}</h2>

                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className={`mt-4 leading-relaxed text-gray-700 whitespace-pre-line `}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {/* <Gallery /> */}
      <div className=' mt-8 sm:px-20 md:px-20 px-5'>
        <h1 className='px-5 md:p-2 text-5xl font-black text-blue-700'>Gallery </h1>
        <div className="w-100 navigation-wrapper mt-8 py-8 px-10 border rounded-lg">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
            <div className="keen-slider__slide p-5"><img src="games.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
            <div className="keen-slider__slide p-5"><img src="senior.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
            <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
            <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </div>
      {/* <ConstructionProgress /> */}
      {/* <div className='p-10'>
            <h1 className='px-6 md:p-8 text-5xl font-black text-blue-700'>Construction Progress </h1>
            <div className="w-100 navigation-wrapper py-8 px-10 border rounded-lg">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                    <div className="keen-slider__slide p-5"><img src="games.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                    <div className="keen-slider__slide p-5"><img src="senior.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                    <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                    <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </div> */}
    </div>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
      <svg
          onClick={props.onClick}
          className={`arrow ${props.left ? "arrow--left" : "arrow--right"
              } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
          {props.left && (
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!props.left && (
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          )}
      </svg>
  )
}

export default ProjectPage