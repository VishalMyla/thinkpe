import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const TrakLandingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Head>
        <title>Trak - Your Career Journey</title>
        <meta name="description" content="Trak makes sure you're on the right path, every step of the way" />
      </Head>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your dream career isn't a faraway
            <span className="inline-block bg-white text-black px-4 py-1 rounded-md mx-2 -rotate-5">
              <p className='-rotate-4'>destination</p>
            </span>
            it's a journey. Trak makes sure you're on the right path, every
            <span className="inline-block bg-white text-black px-6 py-1 rounded-md mx-2 rotate-10">
            <p className='rotate-8'>step</p>
            </span>
            of the way
          </h1>
        </div>
      </main>

      {/* Footer */}
      <div className="w-full py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Progress bar */}
         
          
          {/* Copyright and language selector */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm">
              © 2025 — COPYRIGHT
            </div>
            
            <div className="flex space-x-4 text-sm">
              <Link href="#" className="hover:underline">GER</Link>
              <Link href="#" className="hover:underline">SPA</Link>
              <Link href="#" className="hover:underline">SWE</Link>
              <Link href="#" className="hover:underline">ENG</Link>
              <Link href="#" className="hover:underline">RUS</Link>
            </div>
          </div>
          <div className="w-full h-2 bg-white rounded-full my-6"></div>
        </div>
      </div>
    </div>
  );
};

export default TrakLandingPage;