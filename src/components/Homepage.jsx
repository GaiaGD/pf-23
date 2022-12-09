import React from 'react'

function Homepage() {

  return (
    <div>
      <div className='h-screen flex justify-between items-center'>
        <div className='m-64 flex flex-col items-center'>
            <h1 className='text-orange-400 text-6xl text-center'>Lorem ipsum dolor sit amet, <span className='text-red-600'>Designer & Front-end Developer</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            <div className='cta p-5 border-red-600 border-2 border-solid m-8 w-1/3'>
              <h5 className='text-red-600 text-center'>THINGS I'VE DONE</h5>
            </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className='planet-zoom relative'>
          <div className='absolute w-1/3 -right-48 -top-4'>
            <img src='src/assets/img/mars-zoom.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage