"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  ChartBarIcon,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-600/30" id="ending">
      <div className="px-6 py-12 bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

            {/* Column 1: Brand & Socials (4/12) */}
            <div className="md:col-span-4 flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Image
                  src={"/LOGO.png"}
                  alt="CodeFest Logo"
                  height={55}
                  width={160}
                  className="opacity-90"
                />
              </Link>

              <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed">
                Empowering innovators through technology,
                collaboration, and a shared passion for solving real-world challenges.
              </p>

              <div className="flex flex-col space-y-4 w-full">
                <div className="flex gap-2.5 justify-center md:justify-start">
                  {[
                    { icon: Mail, href: "mailto:acm-chapter@sscbs.du.ac.in", label: "Mail" },
                    { icon: Facebook, href: "https://share.google/lkMc8ERYB7hm9DwNx", label: "Facebook" },
                    { icon: Twitter, href: "https://share.google/9EJg12CpWyxHgGyjS", label: "Twitter" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/acm-sscbs/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/cbs_codefest/", label: "Instagram" },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-yellow-500 hover:text-yellow-400 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>

                <Link
                  href="https://chat.whatsapp.com/JF2nNw3KGQAAAZmDtzdQv8?mode=gi_t"
                  target="_blank"
                  className="inline-flex items-center justify-center md:justify-start gap-2 bg-green-600/10 border border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white px-5 py-2 rounded-full text-[11px] font-medium transition-all w-fit"
                >
                  <ChartBarIcon size={14} />
                  Connect on WhatsApp
                </Link>
              </div>
            </div>

            {/* Column 2: Contact & Links (5/12) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-6 md:gap-4 lg:gap-8">
              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-[11px]">
                  Contact Us
                </h3>
                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="text-[10px] text-yellow-500/90 font-bold uppercase tracking-wider">Namita Mehra</p>
                    <Link href="tel:+916395614834" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                      +91 63956 14834
                    </Link>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-yellow-500/90 font-bold uppercase tracking-wider">Shubhangi Maurya</p>
                    <Link href="tel:+918468045893" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                      +91 84680 45893
                    </Link>
                  </div>
                  <div className="pt-2 flex items-center gap-2 border-t border-white/5">
                    <Mail className="w-3.5 h-3.5 text-yellow-500" />
                    <Link href="mailto:acm-chapter@sscbs.du.ac.in" className="text-[11px] text-gray-400 hover:text-yellow-400 truncate">
                      acm-chapter@sscbs.du.ac.in
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources & Previous Editions */}
              <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                  <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-[11px]">
                    Quick Links
                  </h3>
                  <ul className="space-y-1.5 font-medium">
                    <li>
                      <Link href="/" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/events" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/#timeline" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                        Schedule
                      </Link>
                    </li>
                    <li>
                      <Link href="https://unstop.com/college-fests/cbs-codefest-20-acm-sscbs-442766" className="text-xs text-gray-400 hover:text-yellow-400 transition-colors">
                        Register Now
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-[11px]">
                    Previous Edition
                  </h3>
                  <Link
                    href="https://codefest.acmsscbs.in/"
                    target="_blank"
                    className="text-xs text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 group-hover:animate-ping" />
                    CodeFest 1.0 (2025)
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Location (3/12) */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-[11px] text-center md:text-left">
                Location
              </h3>
              <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/5 ring-1 ring-yellow-500/10 group">
                <iframe
                  className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5621206496758!2d77.11589247550451!3d28.732629375610216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] text-gray-500 text-center md:text-left leading-relaxed">
                Shaheed Sukhdev College of Business Studies, PSP Area IV, New Delhi
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-gray-500 font-medium tracking-wide">
              © {new Date().getFullYear()} CODE FEST.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              Made with <span className="text-red-500/80 animate-pulse">❤</span> by <span className="text-yellow-500/80">ACM SSCBS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
