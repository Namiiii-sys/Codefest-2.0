"use client"
import { navlinks } from '@/lib/navlinks';
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});
const Navbar = () => {
  const [show, setshow] = useState(false)
  const links = navlinks

  const navVariant = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };
  const n = show ? "block" : "none"
  return (
    <>
      <motion.div animate="visible" variants={navVariant} initial="hidden" className='flex bg-black/70 justify-around h-20 place-items-center  shadow-md w-full   fixed z-99'>
        <h1
          className={`md:text-[30px] text-[20px] text-yellow-400 font-semibold tracking-widest drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] ${cinzel.className}`}
        >
          CODE FEST
        </h1>
        <div className='flex gap-8 ' >{links.map((item) => (
          <Link key={item.id} href={item.link} >
            <div className='text-white relative font-bold  group hidden md:flex'>{item.name}<div className='absolute scale-x-0 group-hover:scale-x-100 -bottom-2 left-0 right-0 h-0.5 origin-left rounded-full bg-yellow-400 duration-300 ease-out'></div></div>

          </Link>
        ))}</div>

        <div className='md:hidden flex mr-2 gap-5 place-items-center' onClick={() => { if (show) { setshow(false) } else { setshow(true) } }}>

          {show ? <X className="text-white" /> : <Menu className="text-white" />}
        </div>

      </motion.div>

      <div
        className="w-full fixed top-0 left-0 z-100 bg-black pb-6 shadow-md md:hidden"
        style={{ display: n }}
      >
        {/* close button row */}
        <div className="flex justify-between px-5 py-4">
          <h1
            className={`md:text-[30px] text-[20px] text-yellow-400 font-semibold tracking-widest drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] ${cinzel.className}`}
          >
            CODE FEST
          </h1>
          <button onClick={() => setshow(false)}>
            <X className="text-white w-6 h-6" />
          </button>
        </div>

        {/* links */}
        <div className="flex flex-col gap-4 px-6">

          {links.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setshow(false)}
              className="text-white font-semibold text-lg hover:text-yellow-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </>

  )
}

export default Navbar