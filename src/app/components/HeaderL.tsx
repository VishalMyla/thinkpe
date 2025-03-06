// app/components/Header.tsx

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
export default function HeaderL() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='w-full'>
    <div className="w-full py-8 px-12 flex justify-between items-center relative">
        <div className="flex items-center">
          {/* Hamburger Button */}
          <button onClick={() => setMenuOpen(true)} className="z-20 cursor-pointer">
            <div className="flex flex-col gap-2">
              <div className="h-0.5 w-7 bg-black"></div>
              <div className="h-0.5 w-7 bg-black"></div>
            </div>
          </button>

          {/* Logo */}
          <Link href="/" className="ml-4">
            <Image
              src="/Assets/logo.svg"
              alt="TRAK Logo"
              width={194.53}
              height={50.21}
              priority
            />
          </Link>
        </div>

        {/* Try Us Button */}
        <div>
          <Link href="/" className="relative inline-block">
            <div className="absolute inset-0 bg-black rounded-lg translate-x-1 translate-y-1"></div>
            <div className="relative bg-white text-black font-medium py-2 px-6 border border-black rounded-lg">
              Try Us
            </div>
          </Link>
        </div>
      </div>
      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-30 flex flex-col items-start justify-between p-12">
          {/* Close Button */}
        

          <button onClick={() => setMenuOpen(false)} className="absolute top-8 left-8 cursor-pointer">
            <Image src="/head/close.png" alt="Close" width={24} height={24} />
          </button>

          {/* Navigation Links */}
          <nav className="mt-20 flex flex-col gap-6 text-black text-2xl font-semibold">
            <Link href="#" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>Support</Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>Trak for Schools</Link>
          </nav>

          {/* Language Selector & Socials */}
          <div className="w-full flex flex-row justify-between gap-4">
            <select className=" p-2 rounded">
              <option>English</option>
              <option>Spanish</option>
            </select>

            <div className="flex gap-4">
              <Image src="/head/linkedins.svg" alt="LinkedIn" width={24} height={24} />
              <Image src="/head/instas.svg" alt="Instagram" width={24} height={24} />
            </div>
          </div>
         
         
        </div>
        )}
        </header>
  );
}