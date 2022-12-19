import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import {PlanetTheme} from "../PlanetThemeContext"

function Header() {

    const planets = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

    const {planet, togglePlanet} = useContext(PlanetTheme)

    const planetsThemes = planets.map(globe => {
        if (globe == planet.selected){
            return (
                <div className="mr-16" key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className={`${globe}Glow w-full selectedZoom`} src={`src/assets/img/${globe}.png`}/>
                </div>)
        } else {
            return (
                <div className='mr-16' key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className="w-full opacity-30" src={`src/assets/img/${globe}.png`}/>
                </div>
            )
        }
    })

    return (
        <div className='header sticky top-0 z-50 border-b-[0.1px] border-white-100 border-opacity-20 flex justify-between items-center bg-black-200'>

            <div className='max-w-xl m-8 mb-0'>
                <div className='header-planets flex items-center'>
                    {planetsThemes}
                </div>
                <div className='whatPlanet mt-5 mb-5 flex'>
                    <p className='capitalize text-sm tracking-wider'><span className='opacity-50 pr-1'>You are on </span>{planet.selected}</p>
                </div>
            </div>

            <div className='flex max-w-lg m-8'>
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
            </div>
        </div>
    )
}

export default Header
