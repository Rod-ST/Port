import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year:  2020,
        title: 'Intern Intern, Melon S.A',
        duration: '6 Months total',
        details: '6 months as IT Support where i was asked to fixed daily issues that generated in the office , spend time studying the Network layout and solving problems in it, as this was my practice of my network engineering studies '

    },
    {
        year: 2021,
        title: 'IT Support , Melon S.A',
        duration: '6 Months, Oct.2021 - Mar.2022',
        details: 'Worked as IT Support , almost the same job as an intern'

    },
    {
        year: 2022,
        title: 'IT Support , GA.MA Italy',
        duration: '5 Months, Dic.2022-Apr.2023',
        details: '5 Months Giving support to the retail stores of GA.MA  helped with routing and internet security , i was also tasked with the setup and later aperture of different retail stores.'

    },
    {
        year: 2020,
        title: 'Freelancer IT Support',
        duration: 'Since 2020',
        details: 'In between jobs i do repairs. Computers, cellphones , and tech in general'

    }
]
const Work = () => {
  return (
    <div id='work' className='amx-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-stone-600'>Work</h1>
        {data.map((item, idx) => (
            <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}

    </div>
  )
}

export default Work