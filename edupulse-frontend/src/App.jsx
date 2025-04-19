import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to EduPulse</h1>
        <p className="text-gray-700 mb-6">
          Real-time Student Engagement & Sentiment Tracker
        </p>
        {/* Additional components for Student Panel and Teacher Dashboard will go here */}
      </main>
    </div>
  );
}

export default App;
