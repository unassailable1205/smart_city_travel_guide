
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cityBlue/10 mb-6">
              <MapPin className="h-10 w-10 text-cityBlue" />
            </div>
            
            <h1 className="text-5xl font-display font-bold mb-4">404</h1>
            <h2 className="text-2xl font-display font-semibold mb-4">Destination Not Found</h2>
            <p className="text-cityGray mb-8">
              The page you're looking for seems to be off the map. 
              Let's get you back on track to explore amazing cities.
            </p>
            
            <Button asChild className="inline-flex items-center">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
