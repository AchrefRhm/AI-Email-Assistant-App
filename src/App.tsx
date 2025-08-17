import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmailDrafter from './components/EmailDrafter';
import EmailSummarizer from './components/EmailSummarizer';
import Translator from './components/Translator';
import ToneRewriter from './components/ToneRewriter';
import Settings from './components/Settings';
import { AppProvider } from './context/AppContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="flex-1 p-6 lg:ml-64 transition-all duration-300">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/draft" element={<EmailDrafter />} />
                <Route path="/summarize" element={<EmailSummarizer />} />
                <Route path="/translate" element={<Translator />} />
                <Route path="/rewrite" element={<ToneRewriter />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;