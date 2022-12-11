import React from 'react'

function Homepage() {

  return (
    <div>
      {/* intro */}
      <div className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-64 flex flex-col items-center'>
            <h1 className='text-orange-500 text-6xl text-center'>Lorem ipsum dolor sit amet, <span className='text-red-600'>Designer & Front-end Developer</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            <div className='cta p-5 border-red-600 border-2 border-solid m-16 w-1/3'>
              <h5 className='text-red-600 text-center'>THINGS I'VE DONE</h5>
            </div>
        </div>
      </div>

      {/* planet info */}
      <div className='planet-info h-[50vh]'>
        <div className='relative overflow-x-clip h-48'>
          <div className='absolute w-1/3 -right-48'>
            <img src='src/assets/img/mars-zoom.png'/>
          </div>
        </div>

        <div className='relative w-full'>
          <div className='absolute right-1/4 left-1/4 w-2/4'>
            <h2 className='text-right text-xl text-orange-500'>Mars can have huge dust storms which last for months and can cover the entire planet</h2>
          </div>
        </div>
      </div>

      {/* things I've done */}
      <div className='projects mt-64 mx-64'>
        <div className='my-32'>
            <h2 className='text-red-600 text-4xl uppercase'>what I’ve designed & built:</h2>
        </div>
        <div className='flex-col'>
          {/* wheels app */}
          <div className='project flex text-white mb-16 items-center w-9/12'>
            <div className='thumb w-2/4'>
              <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
            </div>
            <div className='w-2/4 left-4'>
              <h2 className='text-red-600 text-3xl uppercase'>WHEELS APP</h2>
              <h5 className='text-lg my-2'>UI - UX, Development</h5>
              <div className='text-orange-500'><span className='mr-8'>REACT.JS</span><span className='mr-8'>JAVASCRIPT</span><span>CSS</span></div>
              <p className='my-8'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='cta p-5 border-red-600 border-2 border-solid w-2/3'>
                <h5 className='text-red-600 text-center uppercase'>view project</h5>
              </div>
            </div>
          </div>
          {/* booking */}
          <div className='project flex text-white mb-16 justify-end'>
            <div className='w-9/12 flex items-center'>
              <div className='thumb w-2/4'>
                <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
              </div>
              <div className='w-2/4 flex flex-col'>
                <h2 className='text-red-600 text-3xl uppercase'>BOOKING</h2>
                <h5 className='text-lg my-2'>UI - UX, Development</h5>
                <div className='text-orange-500'><span className='mr-8'>REACT.JS</span><span className='mr-8'>JAVASCRIPT</span><span>CSS</span></div>
                <p className='my-8'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='cta p-5 border-red-600 border-2 border-solid w-2/3'>
                  <h5 className='text-red-600 text-center uppercase'>view project</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* see more CTA*/}
        <div className='cta mx-auto my-32 p-5 border-red-600 border-2 border-solid w-1/3'>
            <h5 className='text-red-600 text-center uppercase'>see more</h5>
          </div>
      </div>

      <div className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-64 flex flex-col items-end'>
            <h1 className='text-red-600 text-5xl text-right uppercase my-8'>about me</h1>
            <h2 className='text-white text-4xl text-right'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <div className='cta p-5 border-red-600 border-2 border-solid my-16 w-1/3'>
              <h5 className='text-red-600 text-center'>DOWNLOAD RESUME/CV</h5>
            </div>
        </div>
      </div>

      <div className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-64 flex flex-col items-center'>
          <h1 className='text-red-600 text-5xl text-center uppercase my-8'>about me</h1>
          <div className='endorsement flex-col justify-end'>
            <h2 className='text-white text-4xl text-center'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <p className='text-right text-orange-500 my-8'>Someone Lastname, Working as</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage