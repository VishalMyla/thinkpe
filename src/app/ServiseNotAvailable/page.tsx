"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
// import { motion } from "framer-motion";
import CareerPathButton from "../components/CareerPathButton";

 // Importing the loader icon

const ServiceNotFound = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
  <div>
      <div>
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
          <Link href="/try-us" className="relative inline-block">
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
        </div>
        <div className="flex justify-center items-center h-[60vh]">
        {loading ? (
                <div className="flex flex-col items-center justify-center h-[60vh]">
                  <div className="relative w-16 h-16">
                    <Image 
                      src="/ellipse.svg"
                      height={15}
                      width={23}
                      alt="Loading..." 
                      className="animate-spin"
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Loading...</p>
                </div>
              ) : (
                <main className="w-2/3 px-6 py-12  flex flex-col items-start gap-8 h-[60vh]">
                  <h1 className="text-5xl  font-medium mb-4">Oops! We’re Not Live in Your Location Yet 🚧</h1>
                  <div>
                    <p className="text-gray-700 ">
                    Looks like you’re trying to access Trak from outside Rajasthan, India.
                    </p >
                    <p  className="text-gray-700 ">
                    We’re currently rolling out our AI-powered career pathways
                    </p>
                    <p  className="text-gray-700 ">
                    exclusively in Rajasthan – but don’t worry, we’re expanding soon to
                    </p>
                    <p  className="text-gray-700 ">
                    help more people achieve their career dreams!
                    </p>
                  </div>
                  <p className="text-gray-700 mb-6">
                  ✨ Want to be the first to know when we launch in your area? 
=  
                  </p>
               <CareerPathButton text="👉 Sign Up for Early Access" link="/"/>
                </main>
              )}
        </div>
         

        </div>
  );
};

export default ServiceNotFound;






// {loading ? (
//   <div className="flex flex-col items-center justify-center h-[60vh]">
//     <div className="relative w-16 h-16">
//       <Image 
//         src="/ellipse.svg"
//         height={15}
//         width={23}
//         alt="Loading..." 
//         className="animate-spin"
//       />
//     </div>
//     <p className="mt-4 text-gray-600">Loading...</p>
//   </div>
// ) : (
//   <main className="text-center px-6 py-12">
//     <h1 className="text-3xl font-semibold mb-4">Oops! We’re Not Live in Your Location Yet 🚧</h1>
//     <p className="text-gray-700 mb-6">
//       Looks like you’re trying to access Trak from outside Rajasthan, India.
//       We’re currently rolling out our AI-powered career pathways exclusively
//       in Rajasthan – but don’t worry, we’re expanding soon to help more
//       people achieve their career dreams!
//     </p>
//     <button className="bg-black text-white px-6 py-2 rounded shadow-md">
//       Sign Up for Early Access
//     </button>
//   </main>
// )}

// {!loading && (
//   <footer className="w-full p-4 border-t text-center text-sm text-gray-500">
//     © 2025 — COPYRIGHT
//   </footer>
// )}