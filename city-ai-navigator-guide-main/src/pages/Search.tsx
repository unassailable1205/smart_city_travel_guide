
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CityCard from '../components/CityCard';
import { City } from '../types';
import { searchCities } from '../services/cityService';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      try {
        const searchResults = await searchCities(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Error searching cities:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    performSearch();
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Search Results</h1>
          <p className="text-cityGray">
            {query ? (
              <>Showing results for <span className="font-medium">"{query}"</span></>
            ) : (
              'Please enter a search term'
            )}
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((city) => (
                  <CityCard key={city.id} city={city} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <SearchIcon className="h-8 w-8 text-cityGray" />
                </div>
                <h2 className="text-xl font-display font-semibold mb-2">No cities found</h2>
                <p className="text-cityGray mb-6">
                  We couldn't find any cities matching your search.
                </p>
                <Button asChild>
                  <a href="/explore">Browse All Cities</a>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
