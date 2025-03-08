
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Values from '@/components/Values';
import Footer from '@/components/Footer';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Values />
        <section id="mission" className="py-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-guardian-50/50 to-transparent"></div>
          <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-guardian-200/30 filter blur-3xl"></div>
          <div className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 rounded-full bg-guardian-300/20 filter blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-guardian-100 rounded-full text-guardian-700 text-sm font-medium">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionizing Education With <span className="gradient-text">Ethical AI</span>
              </h2>
              <p className="text-lg text-guardian-700/80">
                Guardian IO is committed to integrating ethics, innovation, and technology, ensuring learners worldwide develop the skills and critical thinking needed to thrive in the digital age.
              </p>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-glass-lg border border-white/20">
              <blockquote className="relative">
                <div className="text-5xl text-guardian-300 absolute top-0 left-0">"</div>
                <p className="text-xl md:text-2xl text-guardian-800 italic pl-8 pr-8">
                  We envision a world where technology empowers education, where AI serves humanity with ethics at its core, and where every learner has access to the tools they need to shape the future.
                </p>
                <div className="text-5xl text-guardian-300 absolute bottom-0 right-8">"</div>
                <footer className="mt-8 text-right">
                  <div className="font-semibold text-guardian-700">Guardian IO Leadership</div>
                  <div className="text-sm text-guardian-600">Shaping the future of AI in education</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        <section id="learn" className="py-20 bg-guardian-950 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 inset-x-0 h-px bg-guardian-800"></div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-guardian-800"></div>
          <div className="absolute -right-64 bottom-0 w-96 h-96 rounded-full bg-guardian-700/5 filter blur-3xl"></div>
          <div className="absolute -left-64 top-0 w-96 h-96 rounded-full bg-guardian-600/5 filter blur-3xl"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-guardian-800 rounded-full text-guardian-200 text-sm font-medium">
                Get Started Today
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-guardian-300 to-guardian-500">Learning Journey</span>
              </h2>
              <p className="text-lg text-guardian-300">
                Join thousands of learners worldwide who are developing future-ready skills with Guardian IO's ethical AI platform.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-stretch gap-6 max-w-5xl mx-auto">
              <div className="flex-1 glass-panel-dark rounded-xl p-8 backdrop-blur-md border border-guardian-800">
                <h3 className="text-xl font-semibold mb-4 text-guardian-100">For Students</h3>
                <ul className="space-y-3 mb-6 text-guardian-300">
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>AI-powered study tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Real-time feedback and progress tracking</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-guardian-700 hover:bg-guardian-600 text-white transition-colors duration-300">
                  Start Learning
                </button>
              </div>
              
              <div className="flex-1 glass-panel-dark rounded-xl p-8 backdrop-blur-md border border-guardian-800">
                <h3 className="text-xl font-semibold mb-4 text-guardian-100">For Educators</h3>
                <ul className="space-y-3 mb-6 text-guardian-300">
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Advanced analytics and insight tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Curriculum development assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-guardian-800 p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-guardian-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Ethical AI integration for classrooms</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-guardian-700 hover:bg-guardian-600 text-white transition-colors duration-300">
                  Join as Educator
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-guardian-700 text-white shadow-lg transition-all duration-300 transform ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default Index;
