import React from 'react'

const Workitem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-purple-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 shadow-lg bg-shadow-purple-800 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 rounded-full font-semibold text-white bg-green-600'>{year}</span>
                <span className='text-lg font-semibold text-green-400 '>{title}</span>
                <span className='my-1 text-sm font-normal leadind-none text-stone-600'>{duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
        </li>
    </ol>
  );
};

export default Workitem;