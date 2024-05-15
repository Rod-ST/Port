import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedinIn, FaInstagram, FaTwitter} from 'react-icons/fa'
import web1 from '../assets/portafolio.jpg'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='w-full  h-screen absolute top-0 bg-white/0'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Rodrigo Hernandez</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Network Engineer',
        2000,
        'Quick Learner ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
            </h2>
            <div className='flex space-x-6 justify-right pt-6 max-w-[200px] w-full'>
               <a href="https://www.linkedin.com/in/rodrigo-h-3b8753143/"><FaLinkedinIn className='cursor-pointer' size={25} /></a>
                <a href="https://www.instagram.com/notrealrod/"><FaInstagram className='cursor-pointer' size={25} /> </a>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Main