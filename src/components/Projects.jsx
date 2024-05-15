import React from 'react'
import Projectitem from './Projectitem';
import propertImg from '../assets/yelp1.png'
// import  propertImg from '../assets'


const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-stone-600'>Projects</h1>
      <p className='text-center py-8'>Short Section about the programming projects that i have done studying, the first one is a Yelp type of site , it has basic authentication and was my first project of the lot (it takes a while to load due to server issues).</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitem  img={propertImg} title='Campgrouds Site ' />
      </div>
    </div>
  )
}

export default Projects;