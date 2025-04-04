
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Facebook, Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-6 w-6 text-cityBlue" />
              <span className="font-display font-bold text-xl">SmartTravel</span>
            </div>
            <p className="text-cityGray mb-6">
              Your AI-powered travel companion for smarter city exploration.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-cityGray hover:text-cityBlue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cityGray hover:text-cityBlue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-cityGray hover:text-cityBlue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cityGray hover:text-cityBlue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cityGray hover:text-cityBlue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-cityGray hover:text-cityBlue transition-colors">
                  Explore Cities
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="text-cityGray hover:text-cityBlue transition-colors">
                  Plan Itinerary
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cityGray hover:text-cityBlue transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold mb-4 text-lg">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-assistant" className="text-cityGray hover:text-cityBlue transition-colors">
                  AI Travel Assistant
                </Link>
              </li>
              <li>
                <Link to="/city-guides" className="text-cityGray hover:text-cityBlue transition-colors">
                  City Guides
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className="text-cityGray hover:text-cityBlue transition-colors">
                  Personalized Recommendations
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-cityGray hover:text-cityBlue transition-colors">
                  Smart Routes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-cityGray">
              <li>hello@smarttravel.app</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Travel Street</li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 text-cityGray text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SmartTravel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cityBlue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cityBlue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cityBlue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
