import React from 'react'
import brandRecognition from "../assets/icon-brand-recognition5.svg";
import detailRecognition from "../assets/icon-detailed-records6.svg";
import fullyCustomised from "../assets/icon-fully-customizable8.svg";

const Advance = () => {
  return (
    <>
    <section className='bg-[var(--Gray)] pb-10 pt-32 py-10  lg:pb-40'>
         <div className='max-width'>

         <h2 className='text-[var(--VeryDarkViolet)] font-bold text-4xl mb-3 text-center'>Advanced Statistic</h2>
         <p className='text-[var(--GrayishViolet)] text-center mb-10 lg:mb-20'>Track how our links are performing across the web <br />with our Advanced statistics dashboard.</p>

         <div className='relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='line'></div>
          <article className='bg-white p-5 rounded relative' >
          <img src={brandRecognition} alt="brandrecognition-image" className=' -mt-12 bg-[var(--VeryDarkViolet)] p-3 rounded-full' />
          <h3 className='text-[var(--VeryDarkViolet)] text-lg mb-2 mt-5 font-bold'>Brand Recognition</h3>
          <p className='text-[var(--GrayishViolet)] text-sm' >Build your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill confidence in your content.</p>
          </article>

          <article className='bg-white p-5 rounded relative' >
          <img src={detailRecognition} alt="detailsrecog-image" className=' -mt-12 bg-[var(--VeryDarkViolet)] p-3 rounded-full' />
          <h3 className='text-[var(--VeryDarkViolet)] text-lg mb-2 mt-5 font-bold' >Details Records</h3>
          <p className='text-[var(--GrayishViolet)] text-sm' >Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </article>

          <article className='bg-white p-5 rounded relative' >
          <img src={fullyCustomised} alt="fullycustomised-image" className='-mt-12 bg-[var(--VeryDarkViolet)] p-3 rounded-full' />
          <h3 className='text-[var(--VeryDarkViolet)] text-lg mb-2 mt-5 font-bold' >Fully customizable</h3>
          <p className='text-[var(--GrayishViolet)] text-sm'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </article>  
         </div>
           </div>
    </section>
    </>
  )
}

export default Advance