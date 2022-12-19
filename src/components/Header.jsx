import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import {PlanetTheme} from "../PlanetThemeContext"

function Header() {

    const {planet, togglePlanet} = useContext(PlanetTheme)
    console.log(planet)

    return (
        <div className='header sticky top-0 z-50 border-b-[0.1px] border-white-100 border-opacity-20 flex justify-between items-center bg-black-200'>
            <div className='header-planets flex items-center max-w-xl m-5'>
                <div className="mr-14" id='mercury' onClick={() => togglePlanet("mercury")}>
                    <img className='w-full' src='src/assets/img/mercury.png'/>
                </div>
                <div className="mr-14" id='venus' onClick={() => togglePlanet("venus")}>
                    <img className='w-full' src='src/assets/img/venus.png'/>
                </div>
                <div className="mr-14" id='mars' onClick={() => togglePlanet("mars")}>
                    <img className='w-full' src='src/assets/img/mars.png'/>
                </div>
                <div className="mr-8" id='jupiter' onClick={() => togglePlanet("jupiter")}>
                    <img className='w-full' src='src/assets/img/jupiter.png'/>
                </div>
                <div className="mr-8" id='saturn' onClick={() => togglePlanet("saturn")}>
                    <img className='w-full' src='src/assets/img/saturn.png'/>
                </div>
                <div className="mr-14" id='uranus' onClick={() => togglePlanet("uranus")}>
                    <img className='w-full' src='src/assets/img/uranus.png'/>
                </div>
                <div className="mr-14" id='neptune' onClick={() => togglePlanet("neptune")}>
                    <img className='w-full' src='src/assets/img/neptune.png'/>
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
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='w-32'
                    to="/#contacts">
                    <h2 className='text-white text-lg'>CONTACT</h2>
                </Link>
                {/* <div className='w-32'>
                    <h2 className='text-white text-lg'>CONTACT</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Header
