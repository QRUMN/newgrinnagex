import twilio from 'twilio';
import OpenAI from 'openai';
import { voiceConfig } from './voiceConfig';
import { AIService } from '../aiService';

export class VoiceService {
  private static twilioClient = twilio(
    voiceConfig.twilio.accountSid,
    voiceConfig.twilio.authToken
  );

  private static openai = new OpenAI({
    apiKey: voiceConfig.openai.apiKey,
  });

  static async handleIncomingCall(callSid: string): Promise<twilio.twiml.VoiceResponse> {
    const response = new twilio.twiml.VoiceResponse();

    try {
      // Start with a greeting
      response.say({
        voice: voiceConfig.voice.voice,
        language: voiceConfig.voice.language,
      }, voiceConfig.prompts.greeting);

      // Gather customer speech input
      response.gather({
        input: 'speech',
        language: voiceConfig.voice.language,
        speechTimeout: 'auto',
        action: '/api/voice/process-speech',
        method: 'POST',
      });

    } catch (error) {
      console.error('Error handling incoming call:', error);
      response.say({
        voice: voiceConfig.voice.voice,
        language: voiceConfig.voice.language,
      }, 'I apologize, but I\'m having trouble processing your call. Please try again later.');
    }

    return response;
  }

  static async processSpeech(speechResult: string, callSid: string): Promise<twilio.twiml.VoiceResponse> {
    const response = new twilio.twiml.VoiceResponse();

    try {
      // Get AI response using existing AIService
      const aiResponse = await AIService.sendMessage(speechResult);

      if (aiResponse.isEmergency) {
        // Handle emergency situation
        response.say({
          voice: voiceConfig.voice.voice,
          language: voiceConfig.voice.language,
        }, voiceConfig.prompts.emergency);

        response.say({
          voice: voiceConfig.voice.voice,
          language: voiceConfig.voice.language,
        }, voiceConfig.prompts.transfer);

        // Transfer to emergency number
        response.dial(voiceConfig.voice.emergencyNumber);
      } else {
        // Normal response
        response.say({
          voice: voiceConfig.voice.voice,
          language: voiceConfig.voice.language,
        }, aiResponse.message);

        // Gather more input
        response.gather({
          input: 'speech',
          language: voiceConfig.voice.language,
          speechTimeout: 'auto',
          action: '/api/voice/process-speech',
          method: 'POST',
        });
      }
    } catch (error) {
      console.error('Error processing speech:', error);
      response.say({
        voice: voiceConfig.voice.voice,
        language: voiceConfig.voice.language,
      }, 'I apologize, but I\'m having trouble understanding. Please try again.');
    }

    return response;
  }

  static async endCall(callSid: string): Promise<twilio.twiml.VoiceResponse> {
    const response = new twilio.twiml.VoiceResponse();
    
    response.say({
      voice: voiceConfig.voice.voice,
      language: voiceConfig.voice.language,
    }, voiceConfig.prompts.goodbye);

    response.hangup();
    
    return response;
  }

  // Utility method to transcribe speech using Whisper
  static async transcribeSpeech(audioUrl: string): Promise<string> {
    const audioResponse = await fetch(audioUrl);
    const audioBuffer = await audioResponse.arrayBuffer();

    const transcription = await this.openai.audio.transcriptions.create({
      file: new File([audioBuffer], 'audio.wav', { type: 'audio/wav' }),
      model: 'whisper-1',
    });

    return transcription.text;
  }
}
