import React, { useContext } from 'react'
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Footer() {
  const {planet} = useContext(PlanetTheme)
  return (
    <FadeInSection>
      <div className='h-[30vh] mt-40 flex-col content-between'>
        <div id="contacts" className='md:px-64 md:py-16 mx-4 bottom-0 my-40'>
          <div className='flex-col justify-between'>
            <h1 className={`${planet.first} md:text-4xl text-lg uppercase mb-8 text-center`}>get in touch</h1>
            <div className=''>

              <h2 className="md:text-3xl text-lg text-center">My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h2>
              <h2 className={`${planet.second} md:text-3xl text-lg text-center`}>hi.gaiadg@gmail.com</h2>
              {/* <div className='md:w-6/12 mt-8 md:mb-0 mb-8 icons contact flex md:justify-end justify-center'>
                <div className='linkedin mr-16'>
                  <a target="_blank" className='' href="https://www.linkedin.com/in/gaia-di-gregorio-bb966044/">
                    <img className="md:h-16 h-10" src='src/assets/img/contact/linkedin.svg'/>
                  </a>
                </div>
                <div className='github'>
                  <a target="_blank" className='' href="https://github.com/gaiagd">
                    <img className="md:h-16 h-10" src='src/assets/img/contact/github.svg'/>
                  </a>
                </div>
              </div> */}

            </div>
          </div>
        </div>
        <div className="md:px-32 px-4 py-4 border-t-[0.1px] border-white-100 border-opacity-10 text-center">
          <small className=''>Designed & Built by Gaia DG</small>
        </div>
      </div>
    </FadeInSection>
  )
}

export default Footer
