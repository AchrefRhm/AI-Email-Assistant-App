import React, { useState } from 'react';
import { Wand2, Copy, Download, Send, Sparkles, Clock, User, Briefcase } from 'lucide-react';

const emailTemplates = [
  { id: 'meeting', icon: Clock, label: 'Meeting Request', description: 'Schedule a meeting or call' },
  { id: 'follow-up', icon: User, label: 'Follow Up', description: 'Follow up on previous conversation' },
  { id: 'proposal', icon: Briefcase, label: 'Business Proposal', description: 'Send a business proposal' },
  { id: 'introduction', icon: Sparkles, label: 'Introduction', description: 'Introduce yourself or your company' },
];

const toneOptions = [
  { id: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
  { id: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
  { id: 'casual', label: 'Casual', description: 'Relaxed and informal' },
  { id: 'urgent', label: 'Urgent', description: 'Clear sense of urgency' },
];

export default function EmailDrafter() {
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateEmail = async () => {
    setIsGenerating(true);
    
    // Simulate AI email generation
    setTimeout(() => {
      const emailContent = `Dear ${recipient || 'Recipient'},

I hope this email finds you well. ${prompt}

Based on your request, I've crafted this ${selectedTone} email to effectively communicate your message. The tone has been carefully adjusted to ensure it resonates with your intended audience while maintaining professionalism and clarity.

Key points covered:
• Clear and concise messaging
• Appropriate tone for the context
• Professional formatting and structure
• Call-to-action where relevant

Please let me know if you need any adjustments or have additional requirements.

Best regards,
Achref Rhouma`;

      setGeneratedEmail(emailContent);
      if (!subject) {
        setSubject('AI Generated Email - Professional Communication');
      }
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AI Email Drafter</h1>
        </div>
        <p className="text-gray-600">Create professional emails from simple prompts using advanced AI technology.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          {/* Email Templates */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h3>
            <div className="grid grid-cols-2 gap-3">
              {emailTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedTemplate === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <template.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-sm">{template.label}</h4>
                  <p className="text-xs text-gray-600">{template.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Email</label>
              <input
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="recipient@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter email subject..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to communicate. For example: 'Schedule a meeting next week to discuss the project proposal'"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Email Tone</label>
              <div className="grid grid-cols-2 gap-2">
                {toneOptions.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedTone === tone.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-semibold text-sm">{tone.label}</h4>
                    <p className="text-xs text-gray-600">{tone.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateEmail}
              disabled={!prompt || isGenerating}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Generated Email</h3>
              {generatedEmail && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                    title="Download as text"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                    title="Send email"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {generatedEmail ? (
              <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-gray-600 mb-1">To: {recipient || 'recipient@example.com'}</div>
                  <div className="text-sm text-gray-600 mb-1">From: achref.rhouma@example.com</div>
                  <div className="font-semibold text-gray-900">Subject: {subject}</div>
                </div>
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{generatedEmail}</div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <Wand2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Your generated email will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}