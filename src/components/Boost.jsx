import React from 'react'
import bgMobile from "../assets/bg-boost-mobile2.svg";
import bgDesktop from "../assets/bg-boost-desktop1.svg";

const Boost = () => {
  return (
    <>
    <section className='boost relative'>
      <picture>
        <source media='(min-width: 768px)' srcSet= {bgDesktop} />
        <img src={bgMobile} alt="bgboostmobile-image" />
      </picture>
     <div className='flex items-center justify-center flex-col boost-inner'>
      <h2 className='mb-5 md:text-4xl text-3xl text-white font-bold text-center'>Boost your links today</h2>
     <button className='btn-cta rounded-full'>Get Started</button>
     </div>
    </section>
    </>
  )
}

export default Boost