
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CityCard from '../components/CityCard';
import { City } from '../types';
import { getCities, searchCities } from '../services/cityService';

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  // Get all cities on component mount
  useEffect(() => {
    const loadCities = async () => {
      setIsLoading(true);
      try {
        const data = await getCities();
        setCities(data);
        setFilteredCities(data);
        
        // Extract unique categories from all cities
        const categories = new Set<string>();
        data.forEach(city => {
          city.categories.forEach(category => categories.add(category));
        });
        setAvailableCategories(Array.from(categories));
        
      } catch (error) {
        console.error('Error loading cities:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCities();
  }, []);

  // Handle initial search query if provided in URL
  useEffect(() => {
    if (initialQuery && cities.length > 0) {
      handleSearch();
    }
  }, [initialQuery, cities]);

  // Apply filters when filter conditions change
  useEffect(() => {
    applyFilters();
  }, [ratingFilter, selectedCategories, cities]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      // If search query is empty, show all cities but apply filters
      setFilteredCities(cities);
      applyFilters();
      return;
    }
    
    setIsLoading(true);
    try {
      const results = await searchCities(searchQuery);
      setFilteredCities(results);
      applyFilters(results);
      
      // Update URL query parameter
      setSearchParams({ q: searchQuery });
      
    } catch (error) {
      console.error('Error searching cities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCities(cities);
    setSearchParams({});
    applyFilters();
  };

  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const applyFilters = (citiesToFilter = filteredCities) => {
    let filtered = [...citiesToFilter];
    
    // Apply rating filter
    if (ratingFilter > 0) {
      filtered = filtered.filter(city => city.rating >= ratingFilter);
    }
    
    // Apply category filters
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(city => 
        selectedCategories.some(cat => city.categories.includes(cat))
      );
    }
    
    setFilteredCities(filtered);
  };

  const clearFilters = () => {
    setRatingFilter(0);
    setSelectedCategories([]);
    setFilteredCities(cities);
    
    if (searchQuery) {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-cityBlue/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Explore Cities Around the World
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by city name, country, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-cityGray" />
              
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 text-cityGray hover:text-cityBlue"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <div className="flex justify-center mt-4">
              <Button onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-cityGray" />
                    <h2 className="font-display font-semibold">Filters</h2>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-xs h-7"
                  >
                    Clear all
                  </Button>
                </div>
                
                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Minimum Rating</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cityGray text-sm">
                      {ratingFilter > 0 ? ratingFilter.toFixed(1) : 'Any'}
                    </span>
                    <span className="text-cityGray text-sm">5.0</span>
                  </div>
                  <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={[ratingFilter]}
                    onValueChange={(value) => setRatingFilter(value[0])}
                  />
                </div>
                
                {/* Categories Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Categories</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {availableCategories.map((category, index) => (
                      <div key={index} className="flex items-center">
                        <Checkbox
                          id={`category-${index}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategoryFilter(category)}
                        />
                        <label 
                          htmlFor={`category-${index}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cities Grid */}
            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-cityGray">
                      {filteredCities.length} {filteredCities.length === 1 ? 'city' : 'cities'} found
                    </p>
                    
                    {(searchQuery || ratingFilter > 0 || selectedCategories.length > 0) && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        onClick={clearFilters}
                        className="text-sm"
                      >
                        Reset filters
                      </Button>
                    )}
                  </div>
                  
                  {filteredCities.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCities.map((city) => (
                        <CityCard key={city.id} city={city} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-display font-semibold mb-2">No cities found</h3>
                      <p className="text-cityGray mb-6">Try adjusting your search or filters</p>
                      <Button onClick={clearFilters}>
                        Clear filters
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
