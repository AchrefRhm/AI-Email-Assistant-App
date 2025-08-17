import React, { useState } from 'react';
import { RefreshCw, Copy, Wand2, Sparkles, Clock, Users, Briefcase, Heart } from 'lucide-react';

const toneOptions = [
  {
    id: 'professional',
    name: 'Professional',
    icon: Briefcase,
    description: 'Formal, business-appropriate tone',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'friendly',
    name: 'Friendly',
    icon: Heart,
    description: 'Warm, approachable, and personable',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'casual',
    name: 'Casual',
    icon: Users,
    description: 'Relaxed, informal conversation',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'concise',
    name: 'Concise',
    icon: Clock,
    description: 'Brief and to the point',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'persuasive',
    name: 'Persuasive',
    icon: Wand2,
    description: 'Compelling and convincing',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'apologetic',
    name: 'Apologetic',
    icon: Heart,
    description: 'Expressing regret or making amends',
    color: 'from-pink-500 to-pink-600'
  }
];

const sampleEmails = [
  {
    id: 1,
    subject: "Meeting Delay",
    content: "Hey, I need to push back our meeting. Something came up. Can we do it tomorrow instead?",
    originalTone: 'casual'
  },
  {
    id: 2,
    subject: "Project Update",
    content: "I am writing to inform you that there has been a delay in the project timeline due to unforeseen circumstances. We will need additional time to complete the deliverables.",
    originalTone: 'professional'
  }
];

export default function ToneRewriter() {
  const [inputEmail, setInputEmail] = useState('');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [rewrittenEmail, setRewrittenEmail] = useState('');
  const [originalTone, setOriginalTone] = useState('');
  const [isRewriting, setIsRewriting] = useState(false);
  const [improvements, setImprovements] = useState<string[]>([]);

  const loadSampleEmail = (email: any) => {
    setInputEmail(email.content);
    setOriginalTone(email.originalTone);
    setRewrittenEmail('');
  };

  const rewriteEmail = async () => {
    if (!inputEmail.trim()) return;
    
    setIsRewriting(true);
    
    // Simulate AI rewriting process
    setTimeout(() => {
      const rewrittenVersions: { [key: string]: string } = {
        professional: "Dear Colleague,\n\nI hope this message finds you well. I am writing to inform you that I need to reschedule our previously arranged meeting due to an unexpected matter that requires my immediate attention.\n\nWould it be possible to reschedule our meeting for tomorrow at the same time? I apologize for any inconvenience this may cause and appreciate your understanding.\n\nI look forward to our discussion and thank you for your flexibility.\n\nBest regards",
        friendly: "Hi there!\n\nI hope you're having a great day! I wanted to reach out because something unexpected has come up, and I need to reschedule our meeting.\n\nWould tomorrow work better for you? I really appreciate your understanding, and I'm looking forward to our conversation!\n\nThanks so much for being flexible.\n\nWarm regards",
        casual: "Hey!\n\nSorry, but I need to move our meeting. Something came up that I need to handle. Tomorrow same time work for you?\n\nThanks for understanding!\n\nCheers",
        concise: "Meeting reschedule needed due to urgent matter. Tomorrow same time? Thanks.",
        persuasive: "I understand that rescheduling meetings can be inconvenient, but an urgent matter has arisen that requires my immediate attention. I believe postponing our meeting by just one day will allow me to give you my full focus and ensure our discussion is as productive as possible. Would tomorrow at the same time work for you?",
        apologetic: "I sincerely apologize for the short notice, but I need to reschedule our meeting. An unexpected situation has arisen that requires my immediate attention, and I don't want to rush through our important discussion. I truly appreciate your understanding and flexibility. Would tomorrow at the same time be convenient for you? Again, I apologize for any inconvenience this may cause."
      };
      
      setRewrittenEmail(rewrittenVersions[selectedTone] || inputEmail);
      
      setImprovements([
        `Tone adjusted to ${selectedTone}`,
        'Improved clarity and structure',
        'Enhanced professional language',
        'Added appropriate greeting and closing'
      ]);
      
      setIsRewriting(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rewrittenEmail);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
            <RefreshCw className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Tone Rewriter</h1>
        </div>
        <p className="text-gray-600">Transform your email's tone while preserving the core message and intent.</p>
      </div>

      {/* Sample Emails */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Try Sample Emails</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleEmails.map((email) => (
            <div
              key={email.id}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer"
              onClick={() => loadSampleEmail(email)}
            >
              <h4 className="font-semibold text-gray-900 mb-2">{email.subject}</h4>
              <p className="text-sm text-gray-700 mb-3">{email.content}</p>
              <span className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                Current: {email.originalTone}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tone Selection */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Target Tone</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {toneOptions.map((tone) => (
            <button
              key={tone.id}
              onClick={() => setSelectedTone(tone.id)}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                selectedTone === tone.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tone.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <tone.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{tone.name}</h4>
              <p className="text-xs text-gray-600">{tone.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Original Email</h3>
              {originalTone && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {originalTone} tone
                </span>
              )}
            </div>
            
            <textarea
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="Enter your email content here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 h-64 resize-none"
            />
            
            <button
              onClick={rewriteEmail}
              disabled={!inputEmail.trim() || isRewriting}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isRewriting ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Rewriting...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Rewrite Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Rewritten Email</h3>
              <div className="flex items-center space-x-2">
                {selectedTone && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {selectedTone} tone
                  </span>
                )}
                {rewrittenEmail && (
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
            
            {rewrittenEmail ? (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{rewrittenEmail}</div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <RefreshCw className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Your rewritten email will appear here</p>
              </div>
            )}
          </div>

          {/* Improvements */}
          {improvements.length > 0 && (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvements Made</h3>
              <div className="space-y-2">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}