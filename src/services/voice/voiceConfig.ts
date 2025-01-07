export const voiceConfig = {
  twilio: {
    accountSid: import.meta.env.VITE_TWILIO_ACCOUNT_SID || '',
    authToken: import.meta.env.VITE_TWILIO_AUTH_TOKEN || '',
    phoneNumber: import.meta.env.VITE_TWILIO_PHONE_NUMBER || '',
  },
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  },
  voice: {
    language: 'en-US',
    voice: 'en-US-Neural2-F', // Female voice
    emergencyNumber: '5551234567',
  },
  prompts: {
    greeting: 'Hello! Thank you for calling Grinnage Pest Control. How can I assist you today?',
    emergency: 'I understand this might be an emergency situation. Let me help you right away.',
    transfer: 'I\'ll transfer you to our emergency line immediately.',
    goodbye: 'Thank you for calling Grinnage Pest Control. Have a great day!',
  },
};
