
import React, { useState } from 'react';
import { Calendar, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { generateItinerary } from '../services/cityService';
import { Itinerary, UserPreference } from '../types';
import { useToast } from '@/components/ui/use-toast';

interface ItineraryPlannerProps {
  cityId: string;
}

const ItineraryPlanner = ({ cityId }: ItineraryPlannerProps) => {
  const [days, setDays] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const { toast } = useToast();

  const preferences: UserPreference[] = [
    { category: 'Culture', level: 3 },
    { category: 'Food', level: 4 },
    { category: 'Architecture', level: 3 }
  ];

  const handleGenerateItinerary = async () => {
    setIsLoading(true);
    try {
      const generatedItinerary = await generateItinerary(cityId, days, preferences);
      setItinerary(generatedItinerary);
      toast({
        title: "Itinerary created!",
        description: `Your ${days}-day itinerary has been generated.`,
      });
    } catch (error) {
      console.error('Error generating itinerary:', error);
      toast({
        title: "Error",
        description: "Failed to generate itinerary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-display font-semibold text-xl mb-4">Plan Your Itinerary</h3>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="days" className="text-sm font-medium">
            Number of Days: {days}
          </label>
        </div>
        <Slider
          id="days"
          min={1}
          max={7}
          step={1}
          value={[days]}
          onValueChange={(value) => setDays(value[0])}
          className="mb-4"
        />
        
        <Button 
          onClick={handleGenerateItinerary} 
          disabled={isLoading} 
          className="w-full"
        >
          {isLoading ? 'Generating...' : 'Generate AI Itinerary'}
        </Button>
      </div>

      {itinerary && (
        <div className="border-t pt-4 animate-fade-in">
          <h4 className="font-display font-semibold text-lg mb-3">Your {days}-Day Itinerary</h4>
          
          {itinerary.days.map((day) => (
            <div key={day.day} className="mb-4 pb-4 border-b last:border-0">
              <h5 className="font-semibold mb-2">Day {day.day}</h5>
              
              {day.morningActivity && (
                <div className="flex items-start mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Clock className="h-4 w-4 text-cityBlue" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Morning</span>
                    <p className="font-medium">{day.morningActivity.name}</p>
                  </div>
                </div>
              )}
              
              {day.afternoonActivity && (
                <div className="flex items-start mb-2">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Calendar className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Afternoon</span>
                    <p className="font-medium">{day.afternoonActivity.name}</p>
                  </div>
                </div>
              )}
              
              {day.eveningActivity && (
                <div className="flex items-start">
                  <div className="bg-purple-50 p-2 rounded-full mr-3">
                    <Clock className="h-4 w-4 text-cityPurple" />
                  </div>
                  <div>
                    <span className="text-sm text-cityGray">Evening</span>
                    <p className="font-medium">{day.eveningActivity.name}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {itinerary.totalCost && (
            <div className="flex items-center text-cityGray mt-2">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>Estimated cost: {itinerary.totalCost}</span>
            </div>
          )}
          
          <Button variant="outline" className="w-full mt-4">
            Save Itinerary
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItineraryPlanner;
