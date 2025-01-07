import OpenAI from 'openai';

interface AIResponse {
  message: string;
  context?: any;
}

export class AIService {
  private static openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    dangerouslyAllowBrowser: true // Note: In production, you should proxy through your backend
  });

  private static systemPrompt = `You are a helpful and friendly customer service representative for a home services company. 
Your name is Alex. You help customers with scheduling appointments, answering questions about services, and handling basic support inquiries.
Always be professional, courteous, and concise. If you're unsure about specific details, ask for clarification.
Never make up information about pricing or availability - instead, direct customers to schedule a consultation.`;

  static async sendMessage(message: string, context?: any): Promise<AIResponse> {
    if (!this.openai.apiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    try {
      const completion = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: this.systemPrompt },
          ...(context?.history || []),
          { role: 'user', content: message }
        ],
        model: 'gpt-4-1106-preview',
        temperature: 0.7,
        max_tokens: 150,
      });

      const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I am unable to process your request at the moment.';
      
      return {
        message: aiResponse,
        context: {
          history: [
            ...(context?.history || []),
            { role: 'user', content: message },
            { role: 'assistant', content: aiResponse }
          ]
        }
      };
    } catch (error) {
      console.error('Error in AI service:', error);
      throw error;
    }
  }

  // Store conversation history in localStorage for persistence
  static async getConversationHistory(userId: string): Promise<any[]> {
    try {
      const history = localStorage.getItem(`chat_history_${userId}`);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error fetching conversation history:', error);
      return [];
    }
  }

  static async saveConversationHistory(userId: string, history: any[]): Promise<void> {
    try {
      localStorage.setItem(`chat_history_${userId}`, JSON.stringify(history));
    } catch (error) {
      console.error('Error saving conversation history:', error);
    }
  }
}
