import React from 'react'


function Header() {

  return (
    <div className='sticky top-0 z-50 border-b-2 border-white-100 border-opacity-20 flex justify-between'>
        <div className='header-planets flex max-w-lg m-5'>
            <div className="mr-7" id='mercury'>
                <img className="w-full" src='src/assets/img/mercury.png'/>
            </div>
            <div className="mr-7" id='venus'>
                <img src='src/assets/img/venus.png'/>
            </div>
            <div className="mr-7" id='mars'>
                <img src='src/assets/img/mars.png'/>
            </div>
            <div className="mr-7" id='mercury'>
                <img className="w-full" src='src/assets/img/mercury.png'/>
            </div>
            <div className="mr-7" id='venus'>
                <img src='src/assets/img/venus.png'/>
            </div>
            <div className="mr-7" id='mars'>
                <img src='src/assets/img/mars.png'/>
            </div>
            <div className="mr-7" id='venus'>
                <img src='src/assets/img/venus.png'/>
            </div>
            <div className="mr-7" id='mars'>
                <img src='src/assets/img/mars.png'/>
            </div>
        </div>
        <div className='flex max-w-lg'>
            <div className='w-32'>
                <h2 className='text-white'>ABOUT</h2>
            </div>
            <div className='w-32'>
                <h2 className='text-white'>WORK</h2>
            </div>
            <div className='w-32'>
                <h2 className='text-white'>CONTACT</h2>
            </div>
        </div>
    </div>
  )
}

export default Header
