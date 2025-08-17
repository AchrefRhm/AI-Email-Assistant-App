import React from 'react';
import { Mail, TrendingUp, Clock, Users, PenTool, FileText, Languages, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Mail, label: 'Emails Processed', value: '1,247', change: '+12%' },
  { icon: TrendingUp, label: 'Response Rate', value: '94.2%', change: '+5.1%' },
  { icon: Clock, label: 'Time Saved', value: '23.4h', change: '+18%' },
  { icon: Users, label: 'Active Contacts', value: '892', change: '+7%' },
];

const quickActions = [
  { icon: PenTool, label: 'Draft Email', description: 'Create professional emails from prompts', path: '/draft', color: 'from-blue-500 to-blue-600' },
  { icon: FileText, label: 'Summarize', description: 'Get key points from long emails', path: '/summarize', color: 'from-green-500 to-green-600' },
  { icon: Languages, label: 'Translate', description: 'Translate emails to any language', path: '/translate', color: 'from-purple-500 to-purple-600' },
  { icon: RefreshCw, label: 'Rewrite Tone', description: 'Adjust email tone and style', path: '/rewrite', color: 'from-orange-500 to-orange-600' },
];

const recentEmails = [
  {
    id: 1,
    from: 'sarah.johnson@techcorp.com',
    subject: 'Q4 Marketing Strategy Review',
    preview: 'Hi team, I wanted to discuss the upcoming Q4 marketing initiatives...',
    time: '2 hours ago',
    status: 'summarized'
  },
  {
    id: 2,
    from: 'mike.chen@startup.io',
    subject: 'Partnership Opportunity',
    preview: 'Hello, I represent a growing fintech startup and would like to explore...',
    time: '5 hours ago',
    status: 'drafted'
  },
  {
    id: 3,
    from: 'anna.lopez@consulting.com',
    subject: 'Project Timeline Update',
    preview: 'The development timeline has been adjusted based on client feedback...',
    time: '1 day ago',
    status: 'translated'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Achref!</h1>
        <p className="text-gray-600">Your AI Email Assistant is ready to help you communicate more effectively.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{action.label}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {recentEmails.map((email) => (
            <div key={email.id} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{email.subject}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    email.status === 'summarized' ? 'bg-green-100 text-green-700' :
                    email.status === 'drafted' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {email.status}
                  </span>
                  <span className="text-sm text-gray-500">{email.time}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{email.from}</p>
              <p className="text-gray-700 text-sm line-clamp-2">{email.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}