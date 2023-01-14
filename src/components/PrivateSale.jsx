import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function PrivateSale() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='project-title md:mt-32 mt-16'>
      {/* intro */}
      <FadeInSection>
        <div className='intro md:mx-64 mx-4'>
          <h5 className={`${planet.first} md:text-5xl text-3xl`}>PRIVATE SALE</h5>
            <div className=''>
              <div className='md:mt-16 mt-8 mb-4'>
                <p className='md:text-lg text-sm md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                A clone of an Ecommerce website created with React.js and styled with Tailwind.
                </p>
                <p className='md:text-lg text-sm mt-4 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                
                </p>
                <p className='md:text-lg text-sm mt-4 md:mb-16 mb-8 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>

                </p>
              </div>
            </div>

        </div>

        <div className='md:flex md:w-2/6 md:mx-64 mx-4'>
            <div className={`py-5 w-full mr-8`}>
              <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>live&nbsp;site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
            </div>
            <div className={`cta py-5 w-full`}>
              <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>view&nbsp;on&nbsp;github <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
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
          <div className='w-3/6 mx-auto p-8 lg:p-16'>
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
            <h5 className='text-xl font-semibold xl:w-2/3 xl:mx-auto'>Features</h5>
            <p className='md:text-lg text-sm mt-2 mb-8 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              The items on the page are fetched from a free api (fakestoreapi.com). You can either "like" any of the products, clicking on the heart icon 
              that appears when hovering on the product (or when you tap on mobile) or add it to your cart right away clicking on the + icon.
            </p>
            <p className='md:text-lg text-sm mt-2 mb-8 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Likewise, you can "unlike" and remove it from the cart clicking on the icons now visible.
              Clicking on the product name, you can visit the product page and add it to the cart.
            </p>
            <p className='md:text-lg text-sm mt-2 mb-8 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Once in the cart, the items are available anytime, even after refreshing the page or leaving and going back on the website again.  
            </p>
          </div>
          <div className='info md:mx-64 mx-4'>
            <h5 className='text-xl font-semibold xl:w-2/3 xl:mx-auto'>Challenges</h5>
            <p className='md:text-lg text-sm mt-2 mb-8 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
                The items on the page are fetched from a free api (fakestoreapi.com).
                Inside the React Context hook, they're stored in a state.
                The Add and the Remove from the cart buttons are defined inside the context too, so they can be evoked in any component at any time that has access to the context.
                Their function is to store the cart content inside the localStorage property and make them a
                Hooks, context, router, local storage
              </p>
          </div>
          <div className='info md:mx-64 mx-4'>
            <p className='md:text-lg text-sm mt-2 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              APIs by: Aerodatabox, Airlabs, Unsplash, Openweathermap</p>
            <p className='md:text-lg text-sm mt-2 mb-8 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Airports list by <a className='underline' target="_blank" href='https://github.com/konsalex'>konsalex</a>, Airline codes by <a className='underline' target="_blank" href='https://github.com/npow'>npow</a>
            </p>
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

export default PrivateSale
