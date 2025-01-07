import OpenAI from 'openai';

interface AIResponse {
  message: string;
  context?: any;
  isEmergency?: boolean;
}

export class AIService {
  private static openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    dangerouslyAllowBrowser: true // Note: In production, you should proxy through your backend
  });

  private static systemPrompt = `You are Alex, a helpful and friendly customer service representative for Grinnage Pest Control.
You help customers with scheduling appointments, answering questions about services, and handling basic support inquiries.
You are especially attentive to emergency situations involving pests.

Key Emergency Guidelines:
1. Identify emergency situations: bed bugs in sleeping areas, dangerous insects (wasps/hornets) near living spaces, rodents in kitchen/food areas
2. For emergencies, emphasize our 24/7 emergency service and provide the emergency number: (555) 123-4567
3. Ask for specific details about the pest situation to assess urgency
4. If not an emergency, suggest regular service scheduling

Always be professional, courteous, and concise. If you're unsure about specific details, ask for clarification.
Never make up information about pricing or availability - instead, direct customers to schedule a consultation.

Emergency Response Protocol:
1. If customer mentions immediate danger or health risks, immediately provide emergency number
2. For pest situations that can wait 24-48 hours, offer next-day scheduling
3. Always ask about the presence of children, elderly, or pets when assessing emergency situations`;

  private static emergencyKeywords = [
    'emergency', 'urgent', 'immediately', 'asap', 'right now',
    'dangerous', 'scared', 'threat', 'bite', 'bitten',
    'allergic', 'allergy', 'poison', 'poisonous',
    'bed bug', 'bedbug', 'wasp', 'hornet', 'rat', 'mouse',
    'in my bedroom', 'in my kitchen', 'everywhere',
    'help', 'serious', 'severe'
  ];

  private static isEmergencySituation(message: string): boolean {
    const lowercaseMessage = message.toLowerCase();
    return this.emergencyKeywords.some(keyword => lowercaseMessage.includes(keyword));
  }

  static async sendMessage(message: string, context?: any): Promise<AIResponse> {
    if (!this.openai.apiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    const isEmergency = this.isEmergencySituation(message);
    const emergencyContext = isEmergency ? 
      'This appears to be an urgent situation. Prioritize emergency response protocol.' : '';

    try {
      const completion = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: this.systemPrompt },
          { role: 'system', content: emergencyContext },
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
        isEmergency,
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
