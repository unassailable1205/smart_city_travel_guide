
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Map, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularCities from '../components/PopularCities';
import AskAI from '../components/AskAI';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cityNavy to-cityBlue text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1344&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Explore Cities Smarter with AI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Your intelligent travel companion for discovering hidden gems, 
              optimized itineraries, and personalized recommendations.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-8">
              <Input
                type="text"
                placeholder="Where do you want to explore?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-full text-black shadow-lg"
              />
              <Search className="absolute left-4 top-3 h-5 w-5 text-cityGray" />
              <Button 
                type="submit" 
                className="absolute right-2 top-2 rounded-full"
                disabled={!searchQuery.trim()}
              >
                Explore
              </Button>
            </form>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Link to="/explore">
                  <Map className="mr-2 h-5 w-5" /> Discover Cities
                </Link>
              </Button>
              <Button asChild className="bg-white text-cityNavy hover:bg-blue-50">
                <Link to="/ai-assistant">
                  <Sparkles className="mr-2 h-5 w-5" /> AI Assistance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Popular Destinations</h2>
            <Link to="/explore" className="text-cityBlue hover:underline flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <PopularCities />
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Your Personal AI Travel Assistant
              </h2>
              <p className="text-cityGray mb-6">
                Get instant recommendations, travel tips, and local insights powered by our advanced AI. 
                Ask anything about your trip and receive tailored advice to make your journey memorable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Sparkles className="h-4 w-4 text-cityBlue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Recommendations</h3>
                    <p className="text-sm text-cityGray">Personalized suggestions based on your interests and preferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-50 p-2 rounded-full mr-3">
                    <Map className="h-4 w-4 text-cityPurple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Local Insights</h3>
                    <p className="text-sm text-cityGray">Discover hidden gems and insider tips from locals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-full mr-3">
                    <Search className="h-4 w-4 text-cityTeal" />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-time Information</h3>
                    <p className="text-sm text-cityGray">Get up-to-date information about attractions, events, and weather</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <AskAI />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-cityNavy to-cityPurple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Smart Features for Smart Travelers
            </h2>
            <p className="max-w-2xl mx-auto text-blue-50">
              Our app is designed to make your travel experience seamless and enriching, 
              with powerful tools that help you explore cities more efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Smart Itineraries</h3>
              <p className="text-blue-50">
                AI-generated travel plans optimized for your interests, time constraints, and budget.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-blue-50">
                Discover attractions and experiences tailored to your unique preferences and travel style.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Local Insights</h3>
              <p className="text-blue-50">
                Get insider tips and hidden gems that most tourists miss, curated by AI and local experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Explore Smarter?
          </h2>
          <p className="max-w-2xl mx-auto text-cityGray mb-8">
            Start your journey with our AI-powered travel assistant and discover 
            cities like never before. No more generic tourist traps or wasted time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/explore">
                Start Exploring
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
