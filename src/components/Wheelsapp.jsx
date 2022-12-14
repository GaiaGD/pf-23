import React from 'react'
import {Link} from "react-router-dom"

function Wheelsapp() {

  return (
    <div className='project-title mt-32'>
      {/* intro */}
      <div className='intro mx-64'>
        <h5 className='text-red-600 text-5xl'>WHEELS APP</h5>
        <p className='text-base my-16 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
      </div>

      <div className='flex w-2/6 ml-64'>
          <div className='cta p-5 w-full border-red-700 border-2 border-solid mr-8'>
            <h5 className='text-red-600 text-center uppercase'>live site</h5>
          </div>
          <div className='cta p-5 w-full border-red-700 border-2 border-solid'>
            <h5 className='text-red-600 text-center uppercase'>view on github</h5>
          </div>
      </div>

      {/* project imgs */}
      <div className='flex my-16'>
        <div className='w-3/6'>
          <img className="my-16 mx-auto max-h-[40rem]" src='src/assets/img/projects/wheelsapp-demo.gif' />
        </div>
        <div className='w-3/6 wheelsapp-case-study flex items-center pr-64'>
          <div className='w-3/6 p-8 lg:p-16'>
            <img className="max-w-sm" src='src/assets/img/projects/wa-logo-white.svg' />
          </div>
          <div className='w-3/6'>
            <img className="max-w-sm" src='src/assets/img/projects/WA-departure.png'/>
            <img className="max-w-sm" src='src/assets/img/projects/WA-arrival.png'/>
          </div>
        </div>
      </div>

      {/* project info */}
      <div className='info mx-64'>
        <h5 className='text-xl font-semibold'>Title</h5>
        <p className='text-base my-8 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
      </div>

      <div className='info mx-64'>
        <h5 className='text-xl font-semibold'>Title</h5>
        <p className='text-base my-8 leading-7'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</p>
      </div>

      <div className="mx-64 flex items-center">
        <div className='w-2/6 flex justify-end'>
          <div className="arrow left"></div>
        </div>

        <div className='w-2/6 flex-col content-between'>
          <Link to="">
            <div className='cta p-5 w-full border-red-700 border-2 border-solid my-32'>
              <h5 className='text-red-600 text-center uppercase'>see all projects</h5>
            </div>
          </Link>

          <Link to="/">
            <div className='cta p-5 w-full mx-auto border-red-700 border-2 border-solid mb-32'>
              <h5 className='text-red-600 text-center uppercase'>back to home</h5>
            </div>
          </Link>
        </div>

        <div className='w-2/6 flex justify-start'>
          <div className="arrow right"></div>
        </div>
      </div>

    </div>
  )
}

export default Wheelsapp
