import React from 'react'
import showcase from "../assets/illustration-working12.svg";

const Showcase = () => {
  return (
    <>
    
    <section className='py-10 lg:py-20'>
      <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center'>
      <article className='text-center md:text-left'>
        <h1 className='text-5xl lg:text-6xl mb-5 font-bold text-[var(--VeryDarkViolet)] '>More than just shorter links</h1>
        <p className='text-lg text-[var(--GrayishViolet)] mb-10 '>Build your brand recognition and get details insights on how your links are performing</p>
        <button className='btn-cta rounded-full'>
         Get Started
        </button>
      </article>

      <article>
        <img src={showcase} alt="illustration-working-image" />
      </article>
      </div>
    </section>
    </>
  )
}

export default Showcase
