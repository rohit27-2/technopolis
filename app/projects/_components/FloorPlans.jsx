import React from 'react'

function FloorPlans() {
    return (
        <div className='px-20'>
            <h2 className="text-4xl font-bold sm:text-5xl">
                <span className='text-blue-700'>2D & 3D </span>
                Floor Plan
            </h2>
            <div className='mt-8'>
                <div className='border rounded-md'>
                    <img src="2dplan.jpg" alt="" />
                </div>
                <div className='px-20 py-10 mt-5 border rounded-md'>
                    <img src="3dplan.jpeg" alt="" className='border rounded-lg'/>
                </div>
            </div>
        </div>
    )
}

export default FloorPlans