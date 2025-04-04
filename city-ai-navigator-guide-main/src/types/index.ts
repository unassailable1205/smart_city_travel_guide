
export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  attractions: Attraction[];
  categories: string[];
  weather?: Weather;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  price?: string;
  duration?: string;
  location?: string;
}

export interface Weather {
  temperature: number;
  condition: string;
  icon: string;
}

export interface UserPreference {
  category: string;
  level: number; // 1-5
}

export interface ItineraryDay {
  day: number;
  attractions: Attraction[];
  morningActivity?: Attraction;
  afternoonActivity?: Attraction;
  eveningActivity?: Attraction;
}

export interface Itinerary {
  cityId: string;
  days: ItineraryDay[];
  totalCost?: string;
}
