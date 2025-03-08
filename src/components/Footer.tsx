
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-t from-guardian-100 to-transparent border-t border-guardian-200/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Logo and info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-guardian-500 to-guardian-700 flex items-center justify-center shadow-md">
                <span className="text-white font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display font-semibold text-xl">Guardian IO</span>
            </div>
            <p className="text-sm text-guardian-700/80">
              Revolutionizing education through ethical AI integration and innovative learning experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-guardian-600 hover:text-guardian-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-guardian-600 hover:text-guardian-800 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-guardian-600 hover:text-guardian-800 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-guardian-600 hover:text-guardian-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-guardian-600 hover:text-guardian-800 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Solutions</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Technology</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          {/* Column 3: Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Learn</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Research</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Column 4: Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Ethics</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-guardian-700/80 hover:text-guardian-700 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-10 border-t border-guardian-200/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-guardian-700/70 mb-4 md:mb-0">
            &copy; {currentYear} Guardian IO. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-guardian-700/70 hover:text-guardian-700 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-guardian-700/70 hover:text-guardian-700 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-guardian-700/70 hover:text-guardian-700 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
