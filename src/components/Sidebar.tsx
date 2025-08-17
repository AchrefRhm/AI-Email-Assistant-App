import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  PenTool,
  FileText,
  Languages,
  RefreshCw,
  Settings,
  X,
  Mail,
  BarChart3,
  Shield
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: PenTool, label: 'Draft Email', path: '/draft' },
  { icon: FileText, label: 'Summarize', path: '/summarize' },
  { icon: Languages, label: 'Translate', path: '/translate' },
  { icon: RefreshCw, label: 'Rewrite Tone', path: '/rewrite' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Shield, label: 'Privacy', path: '/privacy' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-md border-r border-gray-200/50 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="mt-8 lg:mt-0">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Connected Accounts</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Gmail</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Outlook</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}