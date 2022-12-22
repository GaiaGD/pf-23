import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import {PlanetTheme} from "../PlanetThemeContext"

function Homepage() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div>
      {/* */}
      <div className='flex justify-between items-center'>
        <div className='md:mt-64 md:mb-32 md:mx-32 my-16 mx-4 flex flex-col items-center'>
            <h1 className={`${planet.second} md:text-6xl text-3xl md:mb-0 mb-16 text-center`}>Lorem ipsum dolor sit amet, <span className={`${planet.first}`}>Designer & Front-end Developer</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            <HashLink
                smooth={true}
                offset={-70}
                duration={1500}
                className={`${planet.cta} md:p-5 p-3 ${planet.first} border-red-700 border-2 border-solid md:m-16 md:w-1/3 w-full`}
                to="/#projects"
            >
              <h5 className={`${planet.first} md:text-lg text-sm text-center`}>THINGS I'VE MADE</h5>
            </HashLink>
        </div>
      </div>

      {/* things I've done */}
      <div id='projects' className='projects md:mt-64 md:mx-64 mx-4'>
        <div className='mb:my-32 my-16'>
            <h2 className={`${planet.first} md:text-4xl text-xl text-center md:text-left uppercase`}>what I’ve designed & built:</h2>
        </div>
        <div className='flex-col'>
          {/* wheels app */}
          <div className='project md:flex text-white md:mb-40 mb-16 items-center w-full'>
            <div className='thumb md:w-5/12 w-full'>
              <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
            </div>
            <div className='mb:w-7/12 left-4'>
              <h2 className={`${planet.first} md:text-3xl text-xl uppercase`}>WHEELS APP</h2>
              <h5 className='md:text-lg text-sm my-2'>UI - UX, Development</h5>
              <div className={`${planet.second}`}><span className='mr-8 md:text-lg text-sm'>REACT.JS</span><span className='mr-8 md:text-lg text-sm'>JAVASCRIPT</span><span className='md:text-lg text-sm'>CSS</span></div>
              <p className='my-8 md:text-lg text-md'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='flex justify-between items-center md:w-9/12 w-full'>
                <div className='md:flex w-full'>
                  <div className={`cta md:mb-0 mb-3 md:py-5 py-3 w-full mr-8`}>
                    <Link to="/wheelsapp">
                        <h5 className={`${planet.first} md:text-lg text-sm uppercase md:text-left text-center`}>view project <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
                    </Link>
                  </div>
                  <div className={`cta md:p-5 p-3 w-full`}>
                    <h5 className={`${planet.first} md:text-lg text-sm uppercase md:text-left text-center`}>live site<span className={`arrow-hp newTab ${planet.border} ml-4 right`}></span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* booking */}
          <div className='project md:flex text-white md:mb-40 mb-16 items-center w-full'>
            <div className='thumb md:w-5/12 w-full'>
              <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
            </div>
            <div className='mb:w-7/12 left-4'>
              <h2 className={`${planet.first} md:text-3xl text-xl uppercase`}>BOOKING</h2>
              <h5 className='md:text-lg text-sm my-2'>UI - UX, Development</h5>
              <div className={`${planet.second}`}><span className='mr-8 md:text-lg text-sm'>REACT.JS</span><span className='mr-8 md:text-lg text-sm'>JAVASCRIPT</span><span className='md:text-lg text-sm'>CSS</span></div>
              <p className='my-8 md:text-lg text-md'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='flex justify-between items-center md:w-9/12 w-full'>
                <div className='md:flex w-full'>
                  <div className={`cta md:mb-0 mb-3 md:py-5 py-3 w-full mr-8`}>
                    <Link to="/wheelsapp">
                      <h5 className={`${planet.first} md:text-lg text-sm uppercase md:text-left text-center`}>view project <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
                    </Link>
                  </div>
                  <div className={`cta md:p-5 p-3 w-full`}>
                    <h5 className={`${planet.first} md:text-lg text-sm uppercase md:text-left text-center`}>live site<span className={`arrow-hp newTab ${planet.border} ml-4 right`}></span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* see more CTA*/}
        <div className={`cta mx-auto my-32 md:p-5 p-3 ${planet.cta} md:w-1/3 w-full`}>
          <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}>See more</h5>
        </div>
      </div>

      {/* about me */}
      <div id='about' className='flex justify-between items-center mx-4'>
        <div className='md:mt-64 mb-32 md:mx-64 md:flex flex-col items-end'>
            <h1 className={`${planet.first} md:text-4xl text-xl text-center md:text-left uppercase my-8`}>about me</h1>
            <h2 className='text-white md:text-3xl text-xl md:text-right text-center'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <div className={`cta ${planet.cta} md:p-5 p-3 my-16 md:w-1/3 w-full`}>
              <h5 className={`${planet.first} md:text-lg text-sm text-center`}>DOWNLOAD RESUME / CV</h5>
            </div>
        </div>
      </div>

      {/* endorsement */}
      {/* <div className='flex justify-between items-center mx-4'>
        <div className='md:mt-64 md:mb-32 md:mx-64 md:flex flex-col items-center'>
          <h1 className={`${planet.first} md:text-4xl text-xl text-center md:text-left uppercase my-8`}>what they say about me</h1>
          <div className='endorsement flex-col justify-end'>
            <h2 className='text-white md:text-2xl text-xl text-center'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <p className={`md:text-right text-center ${planet.second} my-8`}>Someone Lastname, Working as</p>
          </div>
        </div>
      </div> */}


      {/* planet info */}
      <div className='planet-info h-[50vh]'>
        <div className='relative overflow-x-clip h-48 z-10'>
          <div className='absolute w-1/3 -right-48'>
            <img src={`src/assets/img/${planet.selected}-zoom.png`}/>
          </div>
        </div>

        <div className='relative w-full h-48 flex'>
          {/* scroll to be fixed */}
          {/* <div className="scroll-container border-t-[0.1px] border-b-[0.1px] border-slate-400 border-solid py-3 w-full">
            <div className="scroll-text">
                <h2 className='text-xl font-light'>Mars can have huge dust storms which last for months and can cover the entire planet. Mars has 2 moons called Deimos and Phobos. They are named after the two horses that pull the Roman god of war, Mars’, chariot. They may be asteroids captured by Mars’ gravity.</h2>
            </div>
          </div> */}
          <div className='absolute right-1/4 left-1/4 w-2/4'>
            <h2 className={`text-right text-xl font-light ${planet.second}`}>Mars can have huge dust storms which last for months and can cover the entire planet</h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Homepage