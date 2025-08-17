import React, { useState } from 'react';
import { Settings as SettingsIcon, Mail, Shield, Bell, User, Globe, Palette, Key } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'email', label: 'Email Integration', icon: Mail },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Palette },
    { id: 'api', label: 'API Keys', icon: Key },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        </div>
        <p className="text-gray-600">Manage your AI Email Assistant preferences and integrations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 sticky top-24">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'account' && (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Change Photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value="Achref Rhouma"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value="achref.rhouma@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Integration</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Gmail</h3>
                        <p className="text-sm text-gray-600">achref.rhouma@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-green-600 font-medium">Connected</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Outlook</h3>
                        <p className="text-sm text-gray-600">achref.rhouma@outlook.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-green-600 font-medium">Connected</span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>Add Another Account</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy & Security</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">End-to-End Encryption</h4>
                      <p className="text-sm text-green-700">Your emails are encrypted and secure</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Data Handling Preferences</h4>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked />
                    <span>Store email drafts locally for faster access</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span>Share anonymized usage data to improve AI models</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked />
                    <span>Enable two-factor authentication</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}