
import React, { useEffect, useRef, useState } from 'react';
import { 
  Lightbulb, 
  Scale, 
  Users, 
  Globe, 
  Zap, 
  Lock 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Values = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: <Lightbulb size={32} className="text-guardian-600" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI technology while maintaining ethical standards."
    },
    {
      icon: <Scale size={32} className="text-guardian-600" />,
      title: "Ethics",
      description: "Prioritizing responsible AI development with transparency, fairness, and accountability."
    },
    {
      icon: <Users size={32} className="text-guardian-600" />,
      title: "Inclusivity",
      description: "Creating educational opportunities accessible to all learners regardless of background."
    },
    {
      icon: <Globe size={32} className="text-guardian-600" />,
      title: "Global Impact",
      description: "Addressing educational disparities worldwide through technology and ethical AI."
    },
    {
      icon: <Zap size={32} className="text-guardian-600" />,
      title: "Empowerment",
      description: "Equipping learners with critical thinking and digital literacy for the AI age."
    },
    {
      icon: <Lock size={32} className="text-guardian-600" />,
      title: "Privacy",
      description: "Safeguarding user data with strict protocols and transparent data practices."
    },
  ];

  return (
    <section id="values" className="relative py-20 bg-guardian-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-guardian-200/50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-guardian-200/50"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white to-guardian-50 opacity-60"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-block mb-4 px-4 py-1.5 bg-guardian-100 rounded-full text-guardian-700 text-sm font-medium transition-all duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            Our Values
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Guided by <span className="gradient-text">Principle</span> and <span className="gradient-text">Purpose</span>
          </h2>
          <p 
            className={cn(
              "text-lg text-guardian-700/80 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            At Guardian IO, our core values shape everything we do, from technology development to educational delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-glass-sm transition-all duration-700 transform border border-guardian-200/30",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8",
                "hover:shadow-glass hover:border-guardian-300/50 hover:-translate-y-1"
              )}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-guardian-100 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-guardian-700/80">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
