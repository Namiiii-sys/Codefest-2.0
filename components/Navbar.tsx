"use client";

import { navlinks } from "@/lib/navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useEffect} from "react";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  const [show, setShow] = useState(false);

  const { scrollY } = useScroll();

  // scroll-based transforms
const background = useTransform(
  scrollY,
  [0, 80],
  ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
);

const backdrop = useTransform(
  scrollY,
  [0, 80],
  ["blur(0px)", "blur(14px)"]
);
const borderColor = useTransform(
  scrollY,
  [0, 80],
  ["rgba(234,179,8,0)", "rgba(234,179,8,0.45)"] // yellow-500
);

const shadow = useTransform(
  scrollY,
  [0, 80],
  ["0 0 0 rgba(0,0,0,0)", "0 12px 35px rgba(0,0,0,0.25)"]
);
  return (
    <>
      {/* MAIN NAV */}
<motion.nav
  style={{
    background: isMobile ? "rgba(0, 0, 0, 0.0)" : background,
    backdropFilter: isMobile ? "none" : backdrop,
    WebkitBackdropFilter: isMobile ? "none" : backdrop,
    borderRadius: "9999px",
    border: isMobile?"0px solid":"1px solid",
    borderColor: isMobile ? "rgba(234,179,8,0.6)" : borderColor,
    boxShadow: isMobile?"none":shadow,
  }}
  className="
    fixed top-6 left-1/2 -translate-x-1/2 z-50
    flex items-center
    px-8 h-17
    w-full md:w-fit
  "
>



        {/* LINKS */}
        <div className="hidden md:flex gap-10">
          {navlinks.map((item) => (
            <Link key={item.id} href={item.link}>
              <span className="text-white text-lg font-semibold relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-yellow-400 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
<div className="flex-1 md:hidden" />
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setShow((s) => !s)}
          className="md:hidden text-white bg-black p-3 rounded-xl"
        >
          {show ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* MOBILE DROPDOWN */}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
            fixed top-24 left-1/2 -translate-x-1/2 z-40
            w-[90%]
            rounded-2xl bg-black/70 backdrop-blur-xl
            px-6 py-4 shadow-lg md:hidden
          "
        >
          <div className="flex flex-col gap-4">
            {navlinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setShow(false)}
                className="text-white font-semibold text-lg hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
