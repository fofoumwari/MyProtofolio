// src/sections/Journal.tsx
import React, { useState } from 'react';
//import Section from '../components/Section';
import Section from '../components/sections';
import type { JournalEntry } from '../types';

// Sample journal data with more personal, reflective entries
const initialJournalEntries: JournalEntry[] = [
  {
    id: 1,
    title: "The Joy of Creating",
    date: "2024-03-15",
    content: "There's something magical about bringing ideas to life through code. Today, as I was building this portfolio, I found myself completely immersed in the flow state. Time seemed to disappear, and I was just focused on solving one problem after another. It reminded me why I love development - it's like digital craftsmanship where every line of code contributes to something tangible and meaningful.",
    tags: ["Creativity", "Flow State", "Development", "Passion"]
  },
  {
    id: 2,
    title: "Embracing the Learning Process",
    date: "2024-03-16",
    content: "I've been thinking about how learning programming is much like learning a language. At first, you struggle with basic syntax and concepts, but gradually, you start thinking in that language. The mistakes and bugs aren't failures - they're just part of the conversation between you and the computer. Each error message is the computer trying to understand what you really mean to say.",
    tags: ["Learning", "Growth", "Mindset", "Programming"]
  },
  {
    id: 3,
    title: "Why AI Fascinates Me",
    date: "2024-03-17",
    content: "What draws me to AI isn't just the technical challenge, but the philosophical implications. We're creating systems that can learn, adapt, and even create. It feels like we're on the brink of something profound - not just in terms of technology, but in understanding intelligence itself. How do we ensure these systems reflect the best of humanity rather than amplifying our biases?",
    tags: ["AI Ethics", "Technology", "Philosophy", "Future"]
  }
];

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(initialJournalEntries);
  const [isAdding, setIsAdding] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: '', content: '', tags: '' });

  const handleAddEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        title: newEntry.title,
        date: new Date().toISOString().split('T')[0],
        content: newEntry.content,
        tags: newEntry.tags ? newEntry.tags.split(',').map(tag => tag.trim()) : []
      };
      
      setEntries([entry, ...entries]);
      setNewEntry({ title: '', content: '', tags: '' });
      setIsAdding(false);
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Section id="journal" title="My Digital Garden" subtitle="A space for thoughts, ideas, and reflections" className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        {/* Header with description */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Digital Garden</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is my personal space for thinking out loud, exploring ideas, and documenting my journey. 
            Here I share not just what I'm building, but what I'm learning and thinking about along the way.
          </p>
        </div>

        {/* Add New Entry Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto border border-indigo-200 hover:border-indigo-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Plant a New Thought
          </button>
        </div>

        {/* New Entry Form */}
        {isAdding && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-indigo-400">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cultivate a New Idea</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Thought Seed
                </label>
                <input
                  type="text"
                  id="title"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="What's growing in your mind?"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Let it Grow
                </label>
                <textarea
                  id="content"
                  rows={5}
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="Water your thoughts with words... share your thinking process, questions, or reflections"
                />
              </div>
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                  Garden Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  value={newEntry.tags}
                  onChange={(e) => setNewEntry({...newEntry, tags: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="learning, reflection, ideas, etc."
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleAddEntry}
                  className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Plant This Thought
                </button>
                <button
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Not Quite Ready
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Journal Entries List */}
        <div className="space-y-8">
          {entries.map((entry) => (
            <article key={entry.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{formatDate(entry.date)}</span>
                </div>
                <div className="prose prose-indigo max-w-none mb-4">
                  <p className="text-gray-600 leading-relaxed">{entry.content}</p>
                </div>
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {entries.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your Garden is Peaceful</h3>
            <p className="text-gray-500 mb-4">No thoughts have been planted yet. This space is waiting for your ideas to grow.</p>
            <button
              onClick={() => setIsAdding(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Start Your First Entry
            </button>
          </div>
        )}

        {/* Inspiration Quote */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <blockquote className="text-gray-600 italic max-w-2xl mx-auto">
            "The garden suggests there might be a place where we can meet nature halfway."
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Michael Pollan</footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Journal;