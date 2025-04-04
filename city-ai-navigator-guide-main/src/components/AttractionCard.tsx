
import React from 'react';
import { Attraction } from '../types';
import { Star, Clock, DollarSign, MapPin } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard = ({ attraction }: AttractionCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={attraction.imageUrl} 
          alt={attraction.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            // Fallback image
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80';
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-cityBlue rounded-full">
            {attraction.category}
          </span>
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{attraction.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="font-display font-semibold text-lg mb-2">{attraction.name}</h3>
        <p className="text-cityGray text-sm line-clamp-2 mb-3">{attraction.description}</p>
        
        {/* Details */}
        <div className="flex flex-wrap text-xs text-cityGray gap-3">
          {attraction.price && (
            <div className="flex items-center">
              <DollarSign className="h-3 w-3 mr-1" />
              <span>{attraction.price}</span>
            </div>
          )}
          
          {attraction.duration && (
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{attraction.duration}</span>
            </div>
          )}
          
          {attraction.location && (
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{attraction.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
