
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Users, Globe, Star, Award, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cityNavy to-cityBlue py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">About Smart Travel</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-50">
              We're revolutionizing the way people explore cities using the power of artificial intelligence 
              and human expertise to create truly personalized travel experiences.
            </p>
          </div>
        </div>
        
        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-cityGray mb-8">
                To transform urban travel by combining AI technology with local knowledge, 
                making it easier for travelers to discover the true heart of each city they visit.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="bg-cityBlue/10 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-cityBlue" />
                  </div>
                  <h3 className="font-display font-semibold">Global Reach</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-cityTeal/10 p-4 rounded-full mb-4">
                    <Bot className="h-8 w-8 text-cityTeal" />
                  </div>
                  <h3 className="font-display font-semibold">AI Powered</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-cityPurple/10 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-cityPurple" />
                  </div>
                  <h3 className="font-display font-semibold">Community Driven</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cityBlue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-cityBlue">1</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">Search &amp; Discover</h3>
                <p className="text-cityGray">
                  Browse our curated collection of cities or search for specific destinations. 
                  Our AI helps you discover places that match your unique preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cityTeal/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-cityTeal">2</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">Get AI Recommendations</h3>
                <p className="text-cityGray">
                  Our intelligent system analyzes your preferences and travel history 
                  to suggest attractions, activities, and hidden gems you'll love.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-cityPurple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-cityPurple">3</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">Create Smart Itineraries</h3>
                <p className="text-cityGray">
                  Build efficient travel plans that maximize your experience with 
                  optimized routes, time management, and personalized schedules.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Tech */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Technology</h2>
                <p className="text-lg text-cityGray mb-6">
                  Smart Travel uses advanced AI and machine learning to understand travel patterns 
                  and preferences, creating tailored experiences for every user.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-full mr-3 mt-1">
                      <Star className="h-4 w-4 text-cityBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Natural Language Processing</h3>
                      <p className="text-sm text-cityGray">
                        Our AI understands and responds to your questions and preferences naturally.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-full mr-3 mt-1">
                      <Star className="h-4 w-4 text-cityBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Recommendation Engine</h3>
                      <p className="text-sm text-cityGray">
                        Sophisticated algorithms that match your preferences with the perfect destinations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-full mr-3 mt-1">
                      <Star className="h-4 w-4 text-cityBlue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Real-time Data Processing</h3>
                      <p className="text-sm text-cityGray">
                        Up-to-date information about attractions, weather, and local events.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cityBlue to-cityPurple rounded-lg p-1">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="font-display font-semibold text-xl mb-4 text-center">Our AI Features</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Award className="h-8 w-8 text-cityBlue mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Smart Recommendations</h4>
                        <p className="text-sm text-cityGray">
                          Personalized suggestions based on your unique preferences
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Globe className="h-8 w-8 text-cityTeal mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">City Insights</h4>
                        <p className="text-sm text-cityGray">
                          Unique facts and local knowledge about each destination
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Coffee className="h-8 w-8 text-cityPurple mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Travel Assistant</h4>
                        <p className="text-sm text-cityGray">
                          24/7 AI travel companion to answer questions and provide tips
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-cityNavy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Have questions or feedback about our service? We'd love to hear from you!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:hello@smarttravel.app" className="bg-white text-cityNavy py-2 px-6 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
