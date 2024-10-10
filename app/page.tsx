import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

export default function Home() {
  return (
    <ErrorBoundary>
      <Hero />
      <Services />
      <About />
      <Contact />
    </ErrorBoundary>
  );
}