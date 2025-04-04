
import { City, Attraction, Itinerary, UserPreference } from "../types";

// Mock data for cities
const cities: City[] = [
  {
    id: "nyc",
    name: "New York",
    country: "United States",
    description: "The Big Apple offers unmatched energy, diverse culture, and iconic landmarks. From Times Square to Central Park, it's a city that never sleeps.",
    imageUrl: "/assets/nyc.jpg",
    rating: 4.8,
    categories: ["Urban", "Culture", "Food", "Shopping"],
    attractions: [
      {
        id: "central-park",
        name: "Central Park",
        description: "An urban oasis with 843 acres of green space in the heart of Manhattan.",
        imageUrl: "/assets/central-park.jpg",
        category: "Nature",
        rating: 4.9,
        price: "Free",
        duration: "2-3 hours",
        location: "Manhattan"
      },
      {
        id: "times-square",
        name: "Times Square",
        description: "Iconic intersection known for its bright lights, Broadway theaters, and New Year's Eve celebration.",
        imageUrl: "/assets/times-square.jpg",
        category: "Urban",
        rating: 4.7,
        price: "Free",
        duration: "1 hour",
        location: "Midtown Manhattan"
      },
      {
        id: "statue-of-liberty",
        name: "Statue of Liberty",
        description: "Iconic symbol of freedom and democracy, standing tall on Liberty Island.",
        imageUrl: "/assets/statue-of-liberty.jpg",
        category: "Landmark",
        rating: 4.8,
        price: "$24",
        duration: "3 hours",
        location: "Liberty Island"
      }
    ],
    weather: {
      temperature: 22,
      condition: "Sunny",
      icon: "sun"
    }
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    description: "A dazzling blend of ultramodern and traditional, Tokyo offers cutting-edge technology alongside ancient temples and gardens.",
    imageUrl: "/assets/tokyo.jpg",
    rating: 4.7,
    categories: ["Urban", "Culture", "Food", "Technology"],
    attractions: [
      {
        id: "shibuya-crossing",
        name: "Shibuya Crossing",
        description: "One of the busiest pedestrian crossings in the world, surrounded by bright lights and big screens.",
        imageUrl: "/assets/shibuya.jpg",
        category: "Urban",
        rating: 4.6,
        price: "Free",
        duration: "1 hour",
        location: "Shibuya"
      },
      {
        id: "senso-ji",
        name: "Sensō-ji Temple",
        description: "Tokyo's oldest and most significant Buddhist temple, founded in 628 CE.",
        imageUrl: "/assets/sensoji.jpg",
        category: "Culture",
        rating: 4.7,
        price: "Free",
        duration: "2 hours",
        location: "Asakusa"
      }
    ],
    weather: {
      temperature: 26,
      condition: "Partly Cloudy",
      icon: "cloud-sun"
    }
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "The City of Light captivates with its iconic architecture, world-class museums, and romantic ambiance.",
    imageUrl: "/assets/paris.jpg",
    rating: 4.9,
    categories: ["Culture", "Romance", "Food", "Art"],
    attractions: [
      {
        id: "eiffel-tower",
        name: "Eiffel Tower",
        description: "Iconic iron lattice tower on the Champ de Mars, symbol of Paris and France.",
        imageUrl: "/assets/eiffel-tower.jpg",
        category: "Landmark",
        rating: 4.8,
        price: "€25",
        duration: "2-3 hours",
        location: "7th arrondissement"
      },
      {
        id: "louvre-museum",
        name: "Louvre Museum",
        description: "World's largest art museum and home to thousands of works, including the Mona Lisa.",
        imageUrl: "/assets/louvre.jpg",
        category: "Art",
        rating: 4.9,
        price: "€17",
        duration: "3-4 hours",
        location: "1st arrondissement"
      }
    ],
    weather: {
      temperature: 19,
      condition: "Rainy",
      icon: "cloud-rain"
    }
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    description: "A diverse metropolis blending history with modernity, rich in culture, architecture, and royal heritage.",
    imageUrl: "/assets/london.jpg",
    rating: 4.7,
    categories: ["History", "Culture", "Urban", "Art"],
    attractions: [
      {
        id: "tower-of-london",
        name: "Tower of London",
        description: "Historic castle on the north bank of the River Thames, home to the Crown Jewels.",
        imageUrl: "/assets/tower-london.jpg",
        category: "History",
        rating: 4.7,
        price: "£25",
        duration: "3 hours",
        location: "Tower Hill"
      },
      {
        id: "british-museum",
        name: "British Museum",
        description: "World-famous museum dedicated to human history, art, and culture.",
        imageUrl: "/assets/british-museum.jpg",
        category: "Art",
        rating: 4.8,
        price: "Free",
        duration: "3-4 hours",
        location: "Bloomsbury"
      }
    ],
    weather: {
      temperature: 16,
      condition: "Cloudy",
      icon: "cloud"
    }
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    description: "A vibrant coastal city known for stunning architecture, delicious cuisine, and lively atmosphere.",
    imageUrl: "/assets/barcelona.jpg",
    rating: 4.6,
    categories: ["Beach", "Architecture", "Food", "Culture"],
    attractions: [
      {
        id: "sagrada-familia",
        name: "Sagrada Familia",
        description: "Gaudí's unfinished masterpiece, a UNESCO World Heritage site and iconic basilica.",
        imageUrl: "/assets/sagrada-familia.jpg",
        category: "Architecture",
        rating: 4.9,
        price: "€26",
        duration: "2 hours",
        location: "Eixample"
      },
      {
        id: "park-guell",
        name: "Park Güell",
        description: "Whimsical park featuring colorful mosaics and unique architectural elements by Gaudí.",
        imageUrl: "/assets/park-guell.jpg",
        category: "Architecture",
        rating: 4.7,
        price: "€10",
        duration: "2 hours",
        location: "Carmel Hill"
      }
    ],
    weather: {
      temperature: 24,
      condition: "Sunny",
      icon: "sun"
    }
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    description: "The Eternal City offers a journey through time with ancient ruins, Renaissance art, and vibrant street life.",
    imageUrl: "/assets/rome.jpg",
    rating: 4.8,
    categories: ["History", "Culture", "Food", "Art"],
    attractions: [
      {
        id: "colosseum",
        name: "Colosseum",
        description: "Iconic ancient Roman amphitheater, once host to gladiatorial contests and public spectacles.",
        imageUrl: "/assets/colosseum.jpg",
        category: "History",
        rating: 4.9,
        price: "€16",
        duration: "2 hours",
        location: "Piazza del Colosseo"
      },
      {
        id: "vatican-museums",
        name: "Vatican Museums",
        description: "World-renowned museum complex featuring works collected by the Catholic Church through centuries.",
        imageUrl: "/assets/vatican.jpg",
        category: "Art",
        rating: 4.8,
        price: "€17",
        duration: "3 hours",
        location: "Vatican City"
      }
    ],
    weather: {
      temperature: 27,
      condition: "Sunny",
      icon: "sun"
    }
  }
];

export const getCities = (): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities);
    }, 500);
  });
};

export const getCity = (id: string): Promise<City | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities.find(city => city.id === id));
    }, 300);
  });
};

export const searchCities = (query: string): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = cities.filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase()) || 
        city.country.toLowerCase().includes(query.toLowerCase()) ||
        city.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
      );
      resolve(results);
    }, 300);
  });
};

// AI mock function for generating recommendations
export const getRecommendations = (preferences: UserPreference[]): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple algorithm to match preferences to cities
      const scoredCities = cities.map(city => {
        let score = 0;
        
        preferences.forEach(pref => {
          if (city.categories.some(cat => cat.toLowerCase() === pref.category.toLowerCase())) {
            score += pref.level;
          }
        });
        
        return { city, score };
      });
      
      // Sort by score and return top cities
      const recommended = scoredCities
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0)
        .map(item => item.city);
      
      resolve(recommended.length > 0 ? recommended : cities.slice(0, 3));
    }, 800);
  });
};

// AI mock function for generating an itinerary
export const generateItinerary = (cityId: string, days: number, preferences: UserPreference[]): Promise<Itinerary> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const city = cities.find(c => c.id === cityId);
      
      if (!city) {
        throw new Error("City not found");
      }
      
      // Create a simple itinerary based on available attractions
      const itineraryDays = Array.from({ length: days }, (_, i) => {
        // Simple algorithm to distribute attractions
        const dayAttractions = city.attractions.filter((_, index) => index % days === i);
        
        return {
          day: i + 1,
          attractions: dayAttractions,
          morningActivity: dayAttractions[0],
          afternoonActivity: dayAttractions[1] || dayAttractions[0],
          eveningActivity: dayAttractions[2] || dayAttractions[0]
        };
      });
      
      resolve({
        cityId,
        days: itineraryDays,
        totalCost: `$${Math.floor(100 + Math.random() * 200) * days}`
      });
    }, 1000);
  });
};
