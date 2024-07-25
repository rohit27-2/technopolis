import { BookDashed, Heart, Sprout, TrendingUp, Trophy, UserRound } from 'lucide-react'
import React from 'react'

function DetailsGrid() {
    return (




        <section id='WhySection'>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <div className='flex flex-col items-center' >
                            <h1 className='mt-8 p-6 text-5xl font-black text-gray-800'>Why  <span className='text-blue-700'>Us? </span> </h1>
                            <p >At Technopolis, we offer exceptional real estate services with a focus on transparency, reliability, and local expertise. Our innovative approach and commitment to excellence ensure that every project exceeds expectations. We genuinely care about our clients and the communities we serve.</p>
                        </div >


                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <BookDashed className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Transparent</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Open and honest communication in every transaction.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <UserRound className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Dependable</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Reliable service you can trust, from start to finish.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <Sprout className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Rooted</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Deep local expertise and connections.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <TrendingUp className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Progressive</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Innovative solutions for modern real estate needs.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <Trophy className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Excellence</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Striving for the highest standards in every project.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <Heart className='text-blue-800' />
                            </span>

                            <h2 className="mt-2 font-bold">Caring</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Committed to the well-being of our clients and communities.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default DetailsGrid