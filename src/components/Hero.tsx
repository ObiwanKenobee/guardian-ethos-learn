
import React, { useEffect, useState } from 'react';
import { ArrowDown, BookText, Brain, Globe, Shield, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import AnimatedText from './AnimatedText';
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const scrollTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-guardian-50/80 to-guardian-100/30"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-radial from-guardian-300/10 to-transparent"></div>
      </div>

      {/* Abstract shapes for visual interest */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-guardian-300/10 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-guardian-400/5 filter blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 pt-8 md:pt-16">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-6 px-4 py-1.5 bg-guardian-100 rounded-full text-guardian-800 text-sm font-medium">
              <span className="flex items-center justify-center space-x-2">
                <Shield size={14} className="text-guardian-600" />
                <span>Revolutionary AI Education Platform</span>
              </span>
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block">Empowering Education</span> 
            <span className="block gradient-text mt-2">Through Ethical AI</span>
          </h1>

          <div className={`max-w-3xl mb-8 text-lg md:text-xl text-guardian-800/80 dark:text-guardian-100/80 transition-all duration-700 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <AnimatedText 
              text="Guardian IO combines cutting-edge technology with ethical AI principles to revolutionize education, ensuring learners worldwide develop critical thinking and digital literacy."
              delay={1000}
              speed={20}
              cursorColor="bg-guardian-600"
              highlightText={true}
            />
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {isAuthenticated ? (
              <GradientButton 
                size="lg"
                href="/dashboard"
              >
                Go to Dashboard
              </GradientButton>
            ) : (
              <>
                <GradientButton 
                  size="lg"
                  href="/auth"
                >
                  <LogIn size={18} />
                  <span>Sign In</span>
                </GradientButton>
                <GradientButton 
                  variant="outline" 
                  size="lg"
                  href="/academy"
                >
                  Explore Platform
                </GradientButton>
              </>
            )}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto transition-all duration-700 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-guardian-100">
                <Brain size={24} className="text-guardian-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Driven</h3>
              <p className="text-sm text-guardian-700/80 dark:text-guardian-200/80">
                Personalized learning paths powered by adaptive AI
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-guardian-100">
                <Shield size={24} className="text-guardian-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical Framework</h3>
              <p className="text-sm text-guardian-700/80 dark:text-guardian-200/80">
                Built on principles of privacy, transparency and fairness
              </p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-guardian-100">
                <Globe size={24} className="text-guardian-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Access</h3>
              <p className="text-sm text-guardian-700/80 dark:text-guardian-200/80">
                Cross-platform, multilingual support for learners worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 ${
            showScrollIndicator ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-sm text-guardian-600 mb-2">Discover More</span>
          <ArrowDown size={20} className="text-guardian-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
