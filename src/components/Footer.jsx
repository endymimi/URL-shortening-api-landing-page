import React from 'react'
import facebook from "../assets/icon-facebook7.svg";
import twitter from "../assets/icon-instagram10.svg";
import pinterest from "../assets/icon-pinterest10.svg";
import instagram from "../assets/icon-instagram9.svg";
import logo from "../assets/logo (2)13.svg"

const Footer = () => {
  return (
    <>
    <footer className='bg-[var(--VeryDarkViolet)] py-10  lg:py-20'>
      <div className='max-width mx-30 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5'>
       <article>
        <img className="text-white"src={logo} alt="logo-icon" style={{ filter: 'brightness(0) invert(1)' }} />
       </article>

       <article>
         <h3 className='text-white text-lg font-bold tracking-wide hover:text-cyan-500 cursor-pointer'>Features</h3>
         <ul>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Link Shortening</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Branded Links</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Analytics</button></li>
         </ul>
       </article>

       <article>
         <h3 className='text-white text-lg font-bold tracking-wide hover:text-cyan-500 cursor-pointer' >Resources</h3>
         <ul>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Blogs</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Developers</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Support</button></li>
         </ul>
       </article>

       <article>
         <h3 className='text-white text-lg font-bold tracking-wide' >Company</h3>
         <ul>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>About</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Our Team</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Careers</button></li>
          <li><button className='text-sm text-[var(--GrayishViolet)] hover:text-cyan-500 cursor-pointer mt-1'>Contact</button></li>
         </ul>
       </article>

       <article>
        <ul className='flex items-center'>
          <li className=' hover:bg-cyan-500 cursor-pointer'><img src={facebook} alt="" /></li>
          <li className='ml-4 hover:bg-cyan-500 cursor-pointer'><img src={twitter} alt="" /></li>
          <li className='ml-4 hover:bg-cyan-500 cursor-pointer'><img src={pinterest} alt="" /></li>
          <li className='mx-5 hover:bg-cyan-500 cursor-pointer'><img src={instagram} alt="" /></li>
        </ul>
       </article>
      </div>
    </footer>
    </>
  )
}

export default Footer

