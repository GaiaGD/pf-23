import React from 'react'


function Footer() {

  return (
    <>
      <div id="contacts" className='px-64 py-16 bottom-0'>
        <div className='flex-col justify-between'>
          <h1 className='text-red-600 text-4xl uppercase mb-8'>get in touch</h1>
          <div className='flex justify-between items-end'>
            <div className='w-6/12'>
              <h2 className='text-white text-2xl mb-4'>Get in touch or shoot me an email directly on <span className='text-orange-400'>hi.gaiadg@gmail.com</span></h2>
              <form className="flex-col">
                <input type="text" className='w-full my-2 p-3 bg-black border-[1px] border-solid border-orange-400 hover:border-red-700 focus:border-red-700 active:border-red-700 focus:ring-red-600 text-white'></input>
                <input type="email" className='w-full my-2 p-3 bg-black border-[1px] border-solid border-orange-400 hover:border-red-700 focus:border-red-700 active:border-red-700 focus:ring-red-600 text-white'></input>
                <textarea type="text" className='w-full my-2 p-3 bg-black border-[1px] border-solid border-orange-400 hover:border-red-700 focus:border-red-700 active:border-red-700 focus:ring-red-600 text-white'></textarea>
                <div className='cta p-5 border-red-700 border-2 border-solid uppercase text-red-600 text-center w-1/3'>send</div>
              </form>
            </div>
            <div className='w-3-12 icons contact flex'>
              <div className='linkedin mr-16'>
                <a target="_blank" className='' href="https://www.linkedin.com/in/gaia-di-gregorio-bb966044/">
                  <img src='src/assets/img/contact/linkedin.svg'/>
                </a>
              </div>
              <div className='github'>
                <a target="_blank" className='' href="https://github.com/gaiagd">
                  <img src='src/assets/img/contact/github.svg'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-4 border-t-[0.1px] border-white-100 border-opacity-10 text-center">
        <small className=''>Designed & Built by Gaia DG</small>
      </div>
    </>
  )
}

export default Footer
