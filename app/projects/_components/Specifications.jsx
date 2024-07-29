import React from 'react';

// Define the data as an array of objects
const data = [
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

function Specifications() {
    return (
        <div className='px-20'>
            <h2 className="text-4xl font-bold sm:text-5xl">
                <span className='text-blue-700'>Specifications </span>
                
            </h2>
            <div className="mt-8 divide-y divide-gray-100 rounded-xl  bg-white">
                {data.map((item, index) => (
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
    );
}

export default Specifications;
