import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-16">About Us</h1>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Our History */}
        <div>
          <div className="mb-4">
            <p className="text-green-400 tracking-widest uppercase text-sm">Our History</p>
          </div>
          <h2 className="text-5xl font-bold mb-8">Our History</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Trak was born from a simple yet powerful idea – to bridge the gap between ambition and opportunity using AI-driven career pathways. Our journey began with a mission to empower job seekers, students, and professionals by providing them with personalized learning experiences tailored to industry demands.
            </p>
            <p className="text-gray-700">
              From our roots in Rajasthan, India, we have grown into a tech-first career guidance platform, using advanced AI to assess skills, generate custom learning pathways, and match the right talent to the right opportunities. Driven by innovation and a passion for upskilling, we continue to evolve, ensuring every learner finds their ideal career trajectory with Trak – Your AI-Powered Career Companion.
            </p>
          </div>
        </div>
        
        {/* Right Column - Contact Us */}
        <div className="mt-10 md:mt-0 " >
          <div className="mb-4">
            <p className="text-green-400 tracking-widest uppercase text-sm">Contact Us</p>
          </div>
          <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Have questions or need support? Were here to help! Whether youre looking for career guidance, partnership opportunities, or just want to say hello, reach out to us.
            </p>
            <div className="py-2">
              <p className="flex items-center gap-2 mb-2">
                <span>✉️</span> Email: support@trak.com
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Location: Rajasthan, India
              </p>
            </div>
            <p className="text-gray-700 pt-4">
              Lets build your career pathway together with Trak – Your AI-Powered Career Companion!
            </p>
          </div>
          
          {/* Map Image */}
          <div className="mt-6 rounded-lg overflow-hidden ">
            <Image 
              src="/Assets/map.png" 
              alt="Location map showing Jaipur, Rajasthan" 
              width={600} 
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;