"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Staffing Solutions for Your Business</h1>
          <p className="text-xl mb-6">Connect with top IT talent to drive your projects forward.</p>
          <Button size="lg" variant="secondary">Get Started</Button>
        </div>
        <div className="md:w-1/2">
          <Image src="/hero-image.jpg" alt="IT Professionals" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;