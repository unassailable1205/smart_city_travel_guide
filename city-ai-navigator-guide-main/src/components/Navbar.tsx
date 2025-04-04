
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Map, Compass, Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-cityBlue" />
            <span className="font-display font-bold text-xl">SmartTravel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-cityNavy hover:text-cityBlue transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-cityNavy hover:text-cityBlue transition-colors">
              Explore
            </Link>
            <Link to="/itinerary" className="text-cityNavy hover:text-cityBlue transition-colors">
              Itinerary
            </Link>
            <Link to="/about" className="text-cityNavy hover:text-cityBlue transition-colors">
              About
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-cityBlue w-48"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-cityGray" />
            </form>
            <Button variant="outline" size="sm" className="rounded-full">
              <User className="h-4 w-4 mr-1" />
              <span>Sign In</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-cityNavy focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-cityBlue w-full"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-cityGray" />
            </form>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block py-2 px-4 rounded-md hover:bg-gray-50 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/explore" 
                className="block py-2 px-4 rounded-md hover:bg-gray-50 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Map className="h-4 w-4" />
                <span>Explore</span>
              </Link>
              <Link 
                to="/itinerary" 
                className="block py-2 px-4 rounded-md hover:bg-gray-50 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Compass className="h-4 w-4" />
                <span>Itinerary</span>
              </Link>
              <Link 
                to="/about" 
                className="block py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button className="w-full mt-3">
                <User className="h-4 w-4 mr-2" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
