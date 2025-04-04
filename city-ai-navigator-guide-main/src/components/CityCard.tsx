
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { City } from '../types';

interface CityCardProps {
  city: City;
  size?: 'small' | 'medium' | 'large';
}

const CityCard = ({ city, size = 'medium' }: CityCardProps) => {
  const getCardClasses = () => {
    switch (size) {
      case 'small':
        return 'h-48';
      case 'large':
        return 'h-96';
      case 'medium':
      default:
        return 'h-64';
    }
  };

  return (
    <Link to={`/city/${city.id}`} className={`city-card block ${getCardClasses()}`}>
      {/* Image with gradient overlay */}
      <div className="relative h-full">
        <img 
          src={city.imageUrl} 
          alt={city.name} 
          className="city-card-img"
          onError={(e) => {
            // Fallback image if the city image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1344&q=80';
          }}
        />
        <div className="city-card-overlay">
          {/* City Information */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-1">{city.name}</h3>
            <div className="flex items-center mb-2">
              <MapPin className="h-4 w-4 text-white opacity-80 mr-1" />
              <span className="text-white opacity-80 text-sm">{city.country}</span>
            </div>
            {/* Rating */}
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
              <span className="text-white text-sm">{city.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
