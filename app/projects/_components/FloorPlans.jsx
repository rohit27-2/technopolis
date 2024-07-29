import React from 'react'

function FloorPlans() {
    return (
        <div className='px-20'>
            <h2 className="text-4xl font-bold sm:text-5xl">
                <span className='text-blue-700'>2D & 3D </span>
                Floor Plan
            </h2>
            <div className='mt-8'>
                <div>
                    <img src="2dplan.jpg" alt="" />
                </div>
                <div className='px-20 mt-5'>
                    <img src="3dplan.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FloorPlans