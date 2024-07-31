import React from 'react'

function Hero() {
    return (
        <div id='hero' className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
            <div
    class="relative z-30 p-5 text-5xl text-white font-bold lg:text-8xl opacity-70"
  >
    Welcome to <span className='text-blue-700'>Technopolis</span> 
  </div>
            <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoPlay loop muted><source src='solitaire-video-1.mp4' /> </video>
        </div>
    )
}

export default Hero