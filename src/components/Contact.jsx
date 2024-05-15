import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-stone-600 py-4'>Contact Me</h1>
        <form action="https://getform.io/f/paoxzjwb" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-400' name="message" rows="10"></textarea>
            </div>
            <button className='bg-blue-400 text-gray-700 mt-4 w-full- p-4 rounded-lg'>Send Message</button>
        </form>

    </div>
  )
}

export default Contact