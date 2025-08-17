import React, { useState } from 'react';
import { Languages, ArrowRightLeft, Copy, Volume2, Download } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
];

const sampleEmails = [
  {
    id: 1,
    subject: "Partnership Proposal",
    content: "Dear Partner, We would like to propose a strategic partnership between our companies. This collaboration could benefit both parties significantly.",
    language: 'en'
  },
  {
    id: 2,
    subject: "Propuesta de Asociación",
    content: "Estimado socio, nos gustaría proponer una asociación estratégica entre nuestras empresas. Esta colaboración podría beneficiar significativamente a ambas partes.",
    language: 'es'
  }
];

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);
  const [confidence, setConfidence] = useState(0);

  const translateText = async () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    
    // Simulate translation process
    setTimeout(() => {
      const translations: { [key: string]: string } = {
        'en-es': 'Estimado socio, nos gustaría proponer una asociación estratégica entre nuestras empresas. Esta colaboración podría beneficiar significativamente a ambas partes.',
        'en-fr': 'Cher partenaire, nous aimerions proposer un partenariat stratégique entre nos entreprises. Cette collaboration pourrait bénéficier significativement aux deux parties.',
        'en-de': 'Lieber Partner, wir möchten eine strategische Partnerschaft zwischen unseren Unternehmen vorschlagen. Diese Zusammenarbeit könnte beiden Parteien erheblich zugute kommen.',
        'es-en': 'Dear partner, we would like to propose a strategic partnership between our companies. This collaboration could significantly benefit both parties.',
      };
      
      const translationKey = `${fromLanguage}-${toLanguage}`;
      const translation = translations[translationKey] || inputText;
      
      setTranslatedText(translation);
      setConfidence(Math.floor(Math.random() * 15) + 85); // Random confidence between 85-100%
      setIsTranslating(false);
    }, 1500);
  };

  const swapLanguages = () => {
    const tempLang = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const loadSampleEmail = (email: any) => {
    setInputText(email.content);
    setFromLanguage(email.language);
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(translatedText);
  };

  const speakText = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Languages className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Email Translator</h1>
        </div>
        <p className="text-gray-600">Translate your emails into any language while preserving tone and context.</p>
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
              <p className="text-sm text-gray-700 line-clamp-2">{email.content}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {languages.find(l => l.code === email.language)?.flag} {languages.find(l => l.code === email.language)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">From</h3>
              <select
                value={fromLanguage}
                onChange={(e) => setFromLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your email content here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 h-64 resize-none"
            />
            
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => speakText(inputText, fromLanguage)}
                disabled={!inputText}
                className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors disabled:opacity-50"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen</span>
              </button>
              
              <div className="text-sm text-gray-500">
                {inputText.length} characters
              </div>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">To</h3>
              <select
                value={toLanguage}
                onChange={(e) => setToLanguage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 h-64 resize-none"
              />
              {isTranslating && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full"></div>
                    <span className="text-purple-600 font-medium">Translating...</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => speakText(translatedText, toLanguage)}
                  disabled={!translatedText}
                  className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Listen</span>
                </button>
                
                <button
                  onClick={copyTranslation}
                  disabled={!translatedText}
                  className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>
              
              {confidence > 0 && (
                <div className="text-sm text-gray-500">
                  Confidence: {confidence}%
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Translation Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={swapLanguages}
          className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:shadow-md transition-all"
        >
          <ArrowRightLeft className="w-5 h-5" />
          <span>Swap Languages</span>
        </button>
        
        <button
          onClick={translateText}
          disabled={!inputText.trim() || isTranslating}
          className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          <Languages className="w-5 h-5" />
          <span>Translate</span>
        </button>
      </div>
    </div>
  );
}