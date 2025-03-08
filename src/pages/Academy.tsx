
import React, { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Compass, Settings, Shield, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/AnimatedText';
import GradientButton from '@/components/GradientButton';
import { Link } from 'react-router-dom';

const Academy = () => {
  const [loading, setLoading] = useState(true);
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  
  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Introduction to Ethical AI",
      description: "Learn the fundamentals of AI ethics and responsible development.",
      progress: 0,
      level: "Beginner",
      duration: "4 weeks",
      icon: <Shield className="text-guardian-600" size={20} />
    },
    {
      id: 2,
      title: "Data Privacy in the Digital Age",
      description: "Understand the importance of data protection and privacy regulations.",
      progress: 0,
      level: "Intermediate",
      duration: "6 weeks",
      icon: <Users className="text-guardian-600" size={20} />
    },
    {
      id: 3,
      title: "AI-Powered Educational Tools",
      description: "Explore how AI is transforming modern education systems worldwide.",
      progress: 0,
      level: "Intermediate",
      duration: "5 weeks",
      icon: <BookOpen className="text-guardian-600" size={20} />
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-guardian-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-guardian-500 to-guardian-700 animate-pulse"></div>
          <p className="text-guardian-600">Loading your learning dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-guardian-50">
      <header className="bg-white shadow-sm border-b border-guardian-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-guardian-700">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-semibold ml-4">Guardian IO <span className="text-guardian-600">Academy</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Settings size={18} className="text-guardian-600" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="glass-panel p-6 mb-8 rounded-xl">
          <div className="mb-4">
            {!welcomeComplete ? (
              <AnimatedText 
                text="Welcome to Guardian IO Academy! Your personalized AI-driven learning journey starts here."
                speed={30}
                onComplete={() => setWelcomeComplete(true)}
                cursorColor="bg-guardian-600"
                highlightText={true}
              />
            ) : (
              <h2 className="text-xl font-semibold text-guardian-700">
                Welcome to Guardian IO Academy! Your personalized AI-driven learning journey starts here.
              </h2>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-guardian-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-guardian-100 flex items-center justify-center mr-3">
                  <Compass size={20} className="text-guardian-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Learning Path</h3>
                  <p className="text-xs text-guardian-600">Not started</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-guardian-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-guardian-100 flex items-center justify-center mr-3">
                  <BookOpen size={20} className="text-guardian-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Courses</h3>
                  <p className="text-xs text-guardian-600">0 in progress</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-guardian-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-guardian-100 flex items-center justify-center mr-3">
                  <BarChart size={20} className="text-guardian-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Progress</h3>
                  <p className="text-xs text-guardian-600">0% complete</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-guardian-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-guardian-100 flex items-center justify-center mr-3">
                  <Shield size={20} className="text-guardian-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Certifications</h3>
                  <p className="text-xs text-guardian-600">None earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-guardian-100 hover:shadow-md transition-shadow">
                <div className="h-2 bg-gradient-to-r from-guardian-400 to-guardian-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-guardian-100 flex items-center justify-center mr-3">
                      {course.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-guardian-600">{course.level} · {course.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-guardian-700/80 mb-6">{course.description}</p>
                  <GradientButton 
                    size="sm" 
                    className="w-full"
                    gradientFrom="from-guardian-500"
                    gradientTo="to-guardian-700"
                  >
                    Start Course
                  </GradientButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-xl bg-gradient-to-r from-guardian-50 to-guardian-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Ready to personalize your learning journey?</h3>
              <p className="text-sm text-guardian-700/80">Take our assessment to get course recommendations tailored to your skills and goals.</p>
            </div>
            <GradientButton 
              size="default" 
              gradientFrom="from-guardian-600"
              gradientTo="to-guardian-800"
            >
              Start Assessment
            </GradientButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Academy;
