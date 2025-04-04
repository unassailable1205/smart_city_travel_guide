
import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { getAIPrompt } from '../services/aiService';

const AskAI = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userQuestion.trim()) {
      toast({
        title: "Please enter a question",
        description: "Type a travel question to get AI assistance.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await getAIPrompt(userQuestion);
      setAiResponse(response);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to get a response from our AI. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-6 w-6 text-cityTeal" />
        <h3 className="font-display font-semibold text-lg">Travel AI Assistant</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <Textarea
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          placeholder="Ask anything about your trip, e.g., 'Best time to visit Tokyo?', 'Hidden gems in Barcelona?'..."
          className="mb-3 min-h-24"
        />
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={isLoading || !userQuestion.trim()}
            className="flex items-center"
          >
            {isLoading ? 'Thinking...' : 'Ask AI'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>

      {aiResponse && (
        <div className="mt-6 ai-suggestion animate-fade-in">
          <p className="text-foreground">{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI;
