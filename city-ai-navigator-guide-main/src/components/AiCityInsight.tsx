
import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { getAIInsight } from '../services/aiService';

interface AiCityInsightProps {
  cityName: string;
}

const AiCityInsight = ({ cityName }: AiCityInsightProps) => {
  const [insight, setInsight] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInsight = async () => {
      setIsLoading(true);
      try {
        const aiInsight = await getAIInsight(cityName);
        setInsight(aiInsight);
      } catch (error) {
        console.error('Error loading AI insight:', error);
        setInsight('Unable to load AI insights at this time.');
      } finally {
        setIsLoading(false);
      }
    };

    loadInsight();
  }, [cityName]);

  return (
    <div className="ai-suggestion p-5 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="h-5 w-5 text-cityTeal" />
        <h4 className="font-display font-medium">AI Travel Insight</h4>
      </div>
      
      <div>
        {isLoading ? (
          <div className="flex items-center space-x-2 animate-pulse">
            <div className="h-2 bg-cityTeal/20 rounded w-full"></div>
          </div>
        ) : (
          <p>{insight}</p>
        )}
      </div>
    </div>
  );
};

export default AiCityInsight;
