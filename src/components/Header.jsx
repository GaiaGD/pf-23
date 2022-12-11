import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
function Header() {

  return (
    <div className='sticky top-0 z-50 border-b-[0.1px] border-white-100 border-opacity-20 flex justify-between items-center'>
        <div className='header-planets flex items-center max-w-xl m-5'>
            <div className="mr-14 opacity-30" id='mercury'>
                <img className="w-full" src='src/assets/img/mercury.png'/>
            </div>
            <div className="mr-14 opacity-30" id='venus'>
                <img src='src/assets/img/venus.png'/>
            </div>
            <div className="mr-14" id='mars'>
                <img src='src/assets/img/mars.png'/>
            </div>
            <div className="mr-8 opacity-30" id='jupiter'>
                <img className="w-full" src='src/assets/img/jupiter.png'/>
            </div>
            <div className="mr-8 opacity-30" id='saturn'>
                <img src='src/assets/img/saturn.png'/>
            </div>
            <div className="mr-14 opacity-30" id='uranus'>
                <img src='src/assets/img/uranus.png'/>
            </div>
            <div className="mr-14 opacity-30" id='neptune'>
                <img src='src/assets/img/neptune.png'/>
            </div>
        </div>
        <div className='flex max-w-lg'>
            <Link
                smooth={true}
                offset={-70}
                duration={1500}
                className='w-32'
                to="/">
                <h2 className='text-white text-lg'>HOME</h2>
            </Link>
            <Link
                smooth={true}
                offset={-70}
                duration={1500}
                className='w-32'
                to="/#about">
                <h2 className='text-white text-lg'>ABOUT</h2>
            </Link>
            <Link
                smooth={true}
                offset={-70}
                duration={1500}
                className='w-32'
                to="/#projects">
                <h2 className='text-white text-lg'>WORK</h2>
            </Link>
            <div className='w-32'>
                <h2 className='text-white text-lg'>CONTACT</h2>
            </div>
        </div>
    </div>
  )
}

export default Header
