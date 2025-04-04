
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sun, CloudRain, Cloud, CloudSun, Star, MapPin, Filter, Grid2X2, Rows } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AttractionCard from '../components/AttractionCard';
import ItineraryPlanner from '../components/ItineraryPlanner';
import AiCityInsight from '../components/AiCityInsight';
import { City } from '../types';
import { getCity } from '../services/cityService';

const CityDetails = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [city, setCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const loadCity = async () => {
      if (!cityId) return;
      
      setIsLoading(true);
      try {
        const data = await getCity(cityId);
        if (data) {
          setCity(data);
        }
      } catch (error) {
        console.error('Error loading city:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCity();
  }, [cityId]);

  const getWeatherIcon = () => {
    if (!city?.weather) return null;
    
    switch (city.weather.icon) {
      case 'sun':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloud-rain':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'cloud':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'cloud-sun':
        return <CloudSun className="h-6 w-6 text-orange-400" />;
      default:
        return null;
    }
  };

  const filterAttractions = () => {
    if (!city) return [];
    
    if (!activeFilter) return city.attractions;
    
    return city.attractions.filter(attr => 
      attr.category.toLowerCase() === activeFilter.toLowerCase()
    );
  };

  const uniqueCategories = city?.attractions.reduce((categories: string[], attraction) => {
    if (!categories.includes(attraction.category)) {
      categories.push(attraction.category);
    }
    return categories;
  }, []) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-80 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 bg-gray-200 rounded col-span-2"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">City not found</h1>
          <p className="mb-6">We couldn't find the city you're looking for.</p>
          <Button asChild>
            <Link to="/explore">Explore Other Cities</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-80 md:h-96">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${city.imageUrl})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-white mr-1" />
            <span className="text-white opacity-80">{city.country}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{city.name}</h1>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
            <span className="text-white">{city.rating.toFixed(1)} rating</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* City Description and Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-cityGray mb-6">{city.description}</p>
            <AiCityInsight cityName={city.name} />
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="font-display font-semibold text-lg mb-4">Current Weather</h3>
            <div className="flex items-center mb-3">
              {getWeatherIcon()}
              <div className="ml-3">
                <div className="text-2xl font-semibold">{city.weather?.temperature}°C</div>
                <div className="text-cityGray">{city.weather?.condition}</div>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {city.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-50 text-cityBlue text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="attractions" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="itinerary">Plan Itinerary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="attractions">
            {/* Attractions Filters */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-cityGray" />
                <span className="font-medium">Filter by:</span>
                
                <div className="flex flex-wrap gap-2 ml-2">
                  <Button
                    variant={activeFilter === null ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(null)}
                    className="text-xs"
                  >
                    All
                  </Button>
                  
                  {uniqueCategories.map((category, index) => (
                    <Button
                      key={index}
                      variant={activeFilter === category ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className="text-xs"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* View Switcher */}
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  aria-label="Grid view"
                >
                  <Grid2X2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  aria-label="List view"
                >
                  <Rows className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Attractions Grid */}
            <div className={`
              ${viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }
            `}>
              {filterAttractions().map(attraction => (
                <div key={attraction.id}>
                  {viewMode === 'grid' ? (
                    <AttractionCard attraction={attraction} />
                  ) : (
                    <div className="flex border rounded-lg overflow-hidden">
                      <div className="w-1/3">
                        <img 
                          src={attraction.imageUrl} 
                          alt={attraction.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80';
                          }}
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-cityBlue rounded-full">
                            {attraction.category}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm">{attraction.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-display font-semibold mb-2">{attraction.name}</h3>
                        <p className="text-cityGray text-sm line-clamp-2 mb-3">{attraction.description}</p>
                        
                        <div className="flex flex-wrap text-xs text-cityGray gap-3">
                          {attraction.price && (
                            <div className="flex items-center">
                              <span>{attraction.price}</span>
                            </div>
                          )}
                          
                          {attraction.duration && (
                            <div className="flex items-center">
                              <span>{attraction.duration}</span>
                            </div>
                          )}
                          
                          {attraction.location && (
                            <div className="flex items-center">
                              <span>{attraction.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {filterAttractions().length === 0 && (
                <div className="col-span-full text-center py-8">
                  <p className="text-cityGray">No attractions found for this filter.</p>
                  <Button 
                    variant="link" 
                    onClick={() => setActiveFilter(null)}
                  >
                    Show all attractions
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="itinerary">
            <div className="max-w-lg mx-auto">
              <ItineraryPlanner cityId={city.id} />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default CityDetails;
