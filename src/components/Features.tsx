
import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  Code, 
  GraduationCap, 
  LineChart, 
  ShieldCheck, 
  Sparkles,
  Globe,
  RefreshCw,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay for staggered animation
        setTimeout(() => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }, delay);
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-700 transform",
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-8 opacity-0"
      )}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-guardian-100 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-guardian-700/80 dark:text-guardian-200/80 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      title: "AI-Driven Personalization",
      description: "Machine learning models create adaptive learning paths tailored to each student's needs.",
      icon: <Sparkles size={24} className="text-guardian-700" />,
    },
    {
      title: "Ethical AI Framework",
      description: "Responsible AI tools with strict adherence to privacy, transparency, and fairness.",
      icon: <ShieldCheck size={24} className="text-guardian-700" />,
    },
    {
      title: "Global Accessibility",
      description: "Cross-platform, multilingual support built with React and TypeScript for worldwide reach.",
      icon: <Globe size={24} className="text-guardian-700" />,
    },
    {
      title: "Real-Time Learning",
      description: "Interactive content with real-time updates using Vite's fast Hot Module Replacement.",
      icon: <RefreshCw size={24} className="text-guardian-700" />,
    },
    {
      title: "AI & Cybersecurity Skills",
      description: "Hands-on experience with ethical AI, cybersecurity, and digital transformation.",
      icon: <Code size={24} className="text-guardian-700" />,
    },
    {
      title: "Academic Performance",
      description: "Insightful analytics and performance tracking to measure learning progress.",
      icon: <LineChart size={24} className="text-guardian-700" />,
    },
    {
      title: "Media Literacy",
      description: "NLP-powered fact-checking tools to combat misinformation and build critical thinking.",
      icon: <BookOpen size={24} className="text-guardian-700" />,
    },
    {
      title: "Future-Ready Skills",
      description: "AI coding environments for practicing real-world development and problem-solving.",
      icon: <GraduationCap size={24} className="text-guardian-700" />,
    },
    {
      title: "Collaborative Learning",
      description: "Connect with peers and educators worldwide through secure collaborative spaces.",
      icon: <Users size={24} className="text-guardian-700" />,
    },
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-guardian-100/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-guardian-100/50 to-transparent"></div>
      <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-guardian-300/10 filter blur-3xl"></div>
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 rounded-full bg-guardian-400/5 filter blur-3xl"></div>

      <div ref={sectionRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-block mb-4 px-4 py-1.5 bg-guardian-100 rounded-full text-guardian-700 text-sm font-medium transition-all duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            Core Features
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Advanced Capabilities for <span className="gradient-text">Modern Education</span>
          </h2>
          <p 
            className={cn(
              "text-lg text-guardian-700/80 dark:text-guardian-200/80 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Guardian IO combines cutting-edge technology with ethical principles to transform the learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={100 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
