import React, { useState, useRef } from 'react';
import { Phone, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { AIService } from '../../services/aiService';

export const VoiceDemo: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const recognition = useRef<SpeechRecognition | null>(null);
  const synthesis = useRef<SpeechSynthesis | null>(null);

  // Initialize speech recognition and synthesis
  React.useEffect(() => {
    if (window.SpeechRecognition || (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = async (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        
        handleUserInput(text);
      };
    }

    synthesis.current = window.speechSynthesis;
    
    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
      if (synthesis.current) {
        synthesis.current.cancel();
      }
    };
  }, []);

  const handleUserInput = async (text: string) => {
    setMessages(prev => [...prev, { text, isUser: true }]);
    setIsProcessing(true);

    try {
      const response = await AIService.sendMessage(text);
      
      // Add AI response to messages
      setMessages(prev => [...prev, { text: response.message, isUser: false }]);
      
      // Speak the response if not muted
      if (!isMuted && synthesis.current) {
        const utterance = new SpeechSynthesisUtterance(response.message);
        synthesis.current.speak(utterance);
      }

      // If it's an emergency, show emergency UI
      if (response.isEmergency) {
        handleEmergency();
      }
    } catch (error) {
      console.error('Error processing voice input:', error);
      const errorMessage = 'I apologize, but I encountered an error. Please try again.';
      setMessages(prev => [...prev, { text: errorMessage, isUser: false }]);
      
      if (!isMuted && synthesis.current) {
        const utterance = new SpeechSynthesisUtterance(errorMessage);
        synthesis.current.speak(utterance);
      }
    }

    setIsProcessing(false);
  };

  const toggleCall = () => {
    if (!isCallActive) {
      // Start call
      setIsCallActive(true);
      setMessages([{ text: 'Hello! Thank you for calling Grinnage Pest Control. How can I assist you today?', isUser: false }]);
      
      if (!isMuted && synthesis.current) {
        const utterance = new SpeechSynthesisUtterance('Hello! Thank you for calling Grinnage Pest Control. How can I assist you today?');
        synthesis.current.speak(utterance);
      }
    } else {
      // End call
      setIsCallActive(false);
      setIsListening(false);
      if (recognition.current) {
        recognition.current.stop();
      }
      setMessages([]);
    }
  };

  const toggleListening = () => {
    if (!isListening && recognition.current) {
      recognition.current.start();
      setIsListening(true);
    } else if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (synthesis.current) {
      if (!isMuted) {
        synthesis.current.cancel();
      }
    }
  };

  const handleEmergency = () => {
    const emergencyMessage = 'This appears to be an emergency situation. In a real call, you would now be transferred to our emergency line: (555) 123-4567';
    setMessages(prev => [...prev, { text: emergencyMessage, isUser: false }]);
    
    if (!isMuted && synthesis.current) {
      const utterance = new SpeechSynthesisUtterance(emergencyMessage);
      synthesis.current.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="text-lg font-semibold">Voice Assistant Demo</h3>
        <div className="flex space-x-2">
          {isCallActive && (
            <>
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-blue-700 rounded-full transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button
                onClick={toggleListening}
                className={`p-2 hover:bg-blue-700 rounded-full transition-colors ${
                  isListening ? 'bg-green-500' : ''
                }`}
                title={isListening ? 'Stop Listening' : 'Start Listening'}
              >
                {isListening ? <Mic size={20} /> : <MicOff size={20} />}
              </button>
            </>
          )}
          <button
            onClick={toggleCall}
            className={`p-2 ${
              isCallActive ? 'bg-red-500' : 'bg-green-500'
            } rounded-full hover:opacity-90 transition-opacity`}
            title={isCallActive ? 'End Call' : 'Start Call'}
          >
            <Phone size={20} />
          </button>
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 shadow'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 p-3 rounded-lg shadow">
              <span className="animate-pulse">Processing...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-100 rounded-b-lg">
        <div className="text-center text-sm text-gray-600">
          {isCallActive ? (
            isListening ? (
              'Listening... Speak now'
            ) : (
              'Click the microphone to start speaking'
            )
          ) : (
            'Click the phone icon to start a demo call'
          )}
        </div>
      </div>
    </div>
  );
};
