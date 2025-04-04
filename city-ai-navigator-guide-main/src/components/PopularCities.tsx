
import React, { useState, useEffect } from 'react';
import CityCard from './CityCard';
import { City } from '../types';
import { getCities } from '../services/cityService';

const PopularCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCities = async () => {
      setIsLoading(true);
      try {
        const data = await getCities();
        setCities(data);
      } catch (error) {
        console.error('Error loading cities:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCities();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default PopularCities;
