import React, { useState } from 'react';
import { FileText, Copy, Download, Sparkles, Clock, TrendingUp, AlertCircle } from 'lucide-react';

const sampleEmails = [
  {
    id: 1,
    subject: "Q4 Marketing Strategy and Budget Allocation Meeting",
    content: `Hi Team,

I hope this email finds you all well. I wanted to reach out to discuss our upcoming Q4 marketing strategy and budget allocation for the remainder of the fiscal year.

As we approach the final quarter, it's crucial that we align our marketing efforts with our overall business objectives and ensure we're maximizing our ROI on all campaigns. I've been reviewing our current performance metrics, and while we're seeing positive trends in several areas, there are some opportunities for improvement that I'd like to address.

First, let's talk about our social media campaigns. Over the past three months, we've seen a 23% increase in engagement across our primary platforms (Instagram, LinkedIn, and Twitter). However, our conversion rates from social media traffic have remained relatively flat at around 2.1%. I believe we need to reassess our content strategy and potentially invest more in targeted advertising to improve these numbers.

Second, our email marketing campaigns have been performing exceptionally well. We've achieved an average open rate of 28.4% and a click-through rate of 4.2%, which is significantly above industry standards. I think we should consider reallocating some budget from our underperforming channels to expand our email marketing efforts.

Third, I want to discuss our upcoming product launch campaign for the new software suite. Based on preliminary market research, we anticipate strong demand, but we need to ensure our messaging is clear and our target audience is well-defined. I propose we schedule a series of focus groups over the next two weeks to refine our approach.

Looking at our Q4 budget, we have approximately $125,000 remaining in our marketing fund. I suggest we allocate this as follows: 40% to digital advertising (Google Ads, Facebook Ads), 30% to content creation and influencer partnerships, 20% to trade shows and industry events, and 10% for contingency and testing new channels.

I'd like to schedule a team meeting for next Friday, October 15th, at 2:00 PM in Conference Room B to discuss these points in detail. Please review the attached performance reports and come prepared with your thoughts and suggestions.

If you have any questions or concerns before the meeting, please don't hesitate to reach out to me directly.

Looking forward to our discussion and a successful Q4!

Best regards,
Sarah Johnson
Marketing Director
sarah.johnson@company.com`,
    from: "sarah.johnson@company.com",
    timestamp: "2 hours ago"
  }
];

export default function EmailSummarizer() {
  const [inputEmail, setInputEmail] = useState('');
  const [selectedSample, setSelectedSample] = useState('');
  const [summary, setSummary] = useState('');
  const [keyPoints, setKeyPoints] = useState<string[]>([]);
  const [actionItems, setActionItems] = useState<string[]>([]);
  const [sentiment, setSentiment] = useState('');
  const [readingTime, setReadingTime] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const processSampleEmail = (email: any) => {
    setSelectedSample(email.id);
    setInputEmail(email.content);
    summarizeEmail(email.content);
  };

  const summarizeEmail = async (emailContent: string = inputEmail) => {
    if (!emailContent.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setSummary("Sarah Johnson, Marketing Director, is proposing a Q4 marketing strategy review and budget reallocation. The email discusses current performance metrics, identifies areas for improvement, and suggests budget distribution for the remaining $125,000 marketing fund.");
      
      setKeyPoints([
        "Q4 marketing strategy review and budget allocation meeting proposed",
        "Social media engagement up 23%, but conversion rates flat at 2.1%",
        "Email marketing performing well: 28.4% open rate, 4.2% CTR",
        "Product launch campaign needs focus groups for messaging refinement",
        "$125,000 remaining budget to be allocated across channels",
        "Team meeting scheduled for Friday, October 15th at 2:00 PM"
      ]);
      
      setActionItems([
        "Review attached performance reports before Friday meeting",
        "Prepare thoughts and suggestions for budget allocation",
        "Schedule focus groups for product launch messaging",
        "Reassess social media content strategy",
        "Consider expanding email marketing efforts"
      ]);
      
      setSentiment("Professional and constructive");
      setReadingTime("3.5 minutes");
      setIsProcessing(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    const fullSummary = `Email Summary:
${summary}

Key Points:
${keyPoints.map(point => `• ${point}`).join('\n')}

Action Items:
${actionItems.map(item => `• ${item}`).join('\n')}

Sentiment: ${sentiment}
Reading Time: ${readingTime}`;
    
    navigator.clipboard.writeText(fullSummary);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Email Summarizer</h1>
        </div>
        <p className="text-gray-600">Quickly extract key insights, action items, and summaries from lengthy emails.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          {/* Sample Emails */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Try Sample Email</h3>
            {sampleEmails.map((email) => (
              <div
                key={email.id}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer"
                onClick={() => processSampleEmail(email)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{email.subject}</h4>
                  <span className="text-xs text-gray-500">{email.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">From: {email.from}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{email.content.substring(0, 150)}...</p>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <label className="block text-lg font-semibold text-gray-900 mb-4">Email Content</label>
            <textarea
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="Paste your email content here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 h-64 resize-none"
            />
            
            <button
              onClick={() => summarizeEmail()}
              disabled={!inputEmail.trim() || isProcessing}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Summarize Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {summary ? (
            <>
              {/* Summary Card */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{readingTime}</span>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                      title="Copy summary"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed">{summary}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">Sentiment: </span>
                    <span className="font-medium text-blue-600">{sentiment}</span>
                  </div>
                </div>
              </div>

              {/* Key Points */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Points</h3>
                <div className="space-y-3">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Action Items</h3>
                </div>
                <div className="space-y-3">
                  {actionItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-12 border border-gray-200/50 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Your email summary will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}