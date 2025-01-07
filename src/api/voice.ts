import express from 'express';
import { VoiceService } from '../services/voice/voiceService';

const router = express.Router();

// Handle incoming calls
router.post('/incoming', async (req, res) => {
  const { CallSid } = req.body;
  const response = await VoiceService.handleIncomingCall(CallSid);
  res.type('text/xml');
  res.send(response.toString());
});

// Process speech input
router.post('/process-speech', async (req, res) => {
  const { CallSid, SpeechResult } = req.body;
  const response = await VoiceService.processSpeech(SpeechResult, CallSid);
  res.type('text/xml');
  res.send(response.toString());
});

// Handle call completion
router.post('/end', async (req, res) => {
  const { CallSid } = req.body;
  const response = await VoiceService.endCall(CallSid);
  res.type('text/xml');
  res.send(response.toString());
});

export default router;
