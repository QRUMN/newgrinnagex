import React from 'react';
import { Send } from 'lucide-react';
import { FormInput } from '../common/form/FormInput';
import { FormTextarea } from '../common/form/FormTextarea';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Name"
        placeholder="Your full name"
        required
      />
      <FormInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
      />
      <FormInput
        label="Phone"
        type="tel"
        placeholder="(555) 123-4567"
      />
      <FormTextarea
        label="Message"
        placeholder="How can we help you?"
        rows={4}
        required
      />
      <button type="submit" className="btn-primary w-full">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
};