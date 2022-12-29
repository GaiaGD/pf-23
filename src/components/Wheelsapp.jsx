import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Wheelsapp() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='project-title md:mt-32 mt-16'>
      {/* intro */}
      <FadeInSection>
        <div className='intro md:mx-64 mx-4'>
          <h5 className={`${planet.first} md:text-5xl text-3xl`}>WHEELS APP</h5>
          <p className='md:text-lg text-sm md:my-16 my-8 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
        </div>

        <div className='md:flex md:w-2/6 md:mx-64 mx-4'>
            <div className={`py-5 w-full mr-8`}>
              <h5 className={`${planet.first} md:text-lg text-sm md:text-left text-center uppercase`}>live site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
            </div>
            <div className={`cta py-5 w-full`}>
              <h5 className={`${planet.first} md:text-lg text-sm md:text-left text-center uppercase`}>view on github <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
            </div>
        </div>
      </FadeInSection>

      {/* project imgs */}
      <FadeInSection>
      <div className='md:flex my-16'>
        <div className='md:w-3/6'>
          <img className="my-16 mx-auto w-9/12 md:w-auto max-h-[40rem]" src='./projects/wheelsapp-demo.gif' />
        </div>
        <div className='md:w-3/6 wheelsapp-case-study md:flex items-center md:pr-64'>
          <div className='w-3/6 mx-auto p-8 lg:p-20'>
            <img className="md:max-w-sm w-full" src='./projects/wa-logo-white.svg' />
          </div>
          <div className='md:w-3/6'>
            <img className="md:max-w-sm w-full" src='./projects/WA-departure.png'/>
            <img className="md:max-w-sm w-full" src='./projects/WA-arrival.png'/>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* project info */}
      <FadeInSection>
        <div className='mt-40'>
          <div className='info md:mx-64 mx-4'>
            <h5 className='text-xl font-semibold'>Title</h5>
            <p className='md:text-lg text-sm mt-2 mb-8 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
          </div>

          <div className='info md:mx-64 mx-4'>
            <h5 className='text-xl font-semibold'>Title</h5>
            <p className='md:text-lg text-sm mt-2 mb-8 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className='md:mx-64 mx-4'>
          <div className="mx-auto md:w-2/6 md:my-32 my-16">
            {/* <Link to="">
              <div className={`cta p-5 w-full ${planet.cta}2`}>
                <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}>see all projects</h5>
              </div>
            </Link> */}

            <Link to="/">
              <div className={`mt-8 cta p-5 w-full ${planet.cta}2`}>
                <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}><span className={`arrow-hp ${planet.border} mr-2 left`}></span>back to home</h5>
              </div>
            </Link>
          </div>
        </div>
      </FadeInSection>

    </div>
  )
}

export default Wheelsapp
