import React, { useContext } from 'react'
import {PlanetTheme} from "../PlanetThemeContext"

function Footer() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='h-[50vh] mt-40'>
      <div id="contacts" className='md:px-64 md:py-16 mx-4 bottom-0'>
        <div className='flex-col justify-between'>
          <h1 className={`${planet.first} md:text-4xl text-lg uppercase mb-8`}>get in touch</h1>
          <div className='md:flex justify-between items-end'>
            <div className='md:w-6/12 mb-4`'>
              <h2 className='text-white md:text-2xl text-md mb-4'>Get in touch or shoot me an email directly on <span className={`${planet.second}`}>hi.gaiadg@gmail.com</span></h2>
              <form className="flex-col">
              {/* MISSING: focus:ring-red-600  */}
                <input type="text" className={`w-full my-2 p-3 bg-black ${planet.cta} hover:${planet.cta} focus:${planet.cta} active:${planet.cta}text-white`}></input>
                <input type="email" className={`w-full my-2 p-3 bg-black ${planet.cta} hover:${planet.cta} focus:${planet.cta} active:${planet.cta}text-white`}></input>
                <textarea type="text" className={`w-full my-2 p-3 bg-black ${planet.cta} hover:${planet.cta} focus:${planet.cta} active:${planet.cta}text-white`}></textarea>
                <div className={`cta text-lg md:p-5 p-3 md:text-lg text-sm ${planet.cta} uppercase ${planet.first} text-center md:w-1/3 w-full`}>send</div>
              </form>
            </div>
            <div className='md:w-6/12 mt-8 md:mb-0 mb-8 icons contact flex md:justify-end justify-center'>
              <div className='linkedin mr-16'>
                <a target="_blank" className='' href="https://www.linkedin.com/in/gaia-di-gregorio-bb966044/">
                  <img className="h-16" src='src/assets/img/contact/linkedin.svg'/>
                </a>
              </div>
              <div className='github'>
                <a target="_blank" className='' href="https://github.com/gaiagd">
                  <img className="h-16" src='src/assets/img/contact/github.svg'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-32 px-4 py-4 border-t-[0.1px] border-white-100 border-opacity-10 text-center">
        <small className=''>Designed & Built by Gaia DG</small>
      </div>
    </div>
  )
}

export default Footer
