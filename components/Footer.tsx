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
    <footer className="bg-black text-white" id="ending">
      <hr className="border-yellow-600/50" />

      <div className="px-6 py-16 bg-slate-950 text-white">

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">

          {/* LEFT SIDE (Logo + Contact + Follow) */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-8">

            {/* Logo (smaller) */}
            <div className="flex justify-center">
              <Image
                src={"/LOGO.png"}
                alt="logo"
                height={90}
                width={270}
                className="opacity-90"
              />
            </div>


            {/* Contact */}
            <div className="space-y-3 ">
              <h3 className="text-yellow-400 font-semibold tracking-widest uppercase text-s">
                Contact
              </h3>

              <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <Link href="tel:+916395614834" className="text-sm hover:text-yellow-400">
                    Namita Mehra: +91 63956 14834
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <Link href="tel:+918468045893" className="text-sm hover:text-yellow-400">
                    Shubhangi Maurya: +91 84680 45893
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <Link href="mailto:acm-chapter@sscbs.du.ac.in" className="text-sm hover:text-yellow-400">
                   acm-chapter@sscbs.du.ac.in
                  </Link>
                </div>

              </div>
            </div>


            {/* Follow */}
            <div className="space-y-4">
              <h3 className="text-yellow-400 font-semibold tracking-widest uppercase text-s">
                Follow Us
              </h3>

              <div className="flex gap-3 justify-center flex-wrap">

                <Link
                  href="mailto:acm-chapter@sscbs.du.ac.in"
                  target="_blank"
                  aria-label="Mail"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-yellow-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="https://share.google/lkMc8ERYB7hm9DwNx"
                  target="_blank"
                  aria-label="Facebook"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-yellow-500 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="https://share.google/9EJg12CpWyxHgGyjS"
                  target="_blank"
                  aria-label="Twitter"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-yellow-500 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/acm-sscbs/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-yellow-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="https://www.instagram.com/cbs_codefest/"
                  target="_blank"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-yellow-500 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>

              </div>
              <div className="flex justify-center">
                <Link
                href="https://wa.me/+918178281265"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-700 px-6 py-2.5 rounded-lg text-sm"
              >
                <ChartBarIcon size={16} />
                Connect on WhatsApp
              </Link>
              </div>
              
            </div>

          </div>


          {/* RIGHT SIDE (Bigger Map) */}
          <div className="md:col-span-3 w-full min-h-[360px]">

            <iframe
              className="w-full h-full rounded-2xl shadow-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5621206496758!2d77.11589247550451!3d28.732629375610216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1768716593168!5m2!1sen!2sin"
              loading="lazy"
            />

          </div>

        </div>
      </div>




      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} CODE FEST. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
