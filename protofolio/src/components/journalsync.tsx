// src/components/JournalSync.tsx
import React, { useState, useEffect } from 'react';

interface JournalEntry {
  id: number;
  title: string;
  date: string;
  content: string;
  summary: string;
  tags: string[];
}

const JournalSync: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    try {
      // Call our Netlify function
      const response = await fetch('/.netlify/functions/get-journal');
      
      if (!response.ok) {
        throw new Error('Failed to fetch journal entries');
      }
      
      const data = await response.json();
      const rows = data.values;
      
      if (!rows || rows.length === 0) {
        setEntries([]);
        setLoading(false);
        return;
      }
      
      // Skip header row if it exists
      const startIndex = rows[0][0] === 'id' ? 1 : 0;
      const journalEntries: JournalEntry[] = rows.slice(startIndex).map((row: any[], index: number) => ({
        id: row[0] ? parseInt(row[0]) : index + 1,
        title: row[1] || '',
        date: row[2] || '',
        content: row[3] || '',
        summary: row[4] || '',
        tags: row[5] ? row[5].split(',').map((tag: string) => tag.trim()) : []
      }));
      
      setEntries(journalEntries);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
      setError('Failed to load journal entries. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading journal entries...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{entry.date}</p>
          <p className="text-gray-700 mb-4">{entry.content}</p>
          {entry.summary && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">AI Summary</h4>
              <p className="text-blue-700">{entry.summary}</p>
            </div>
          )}
          {entry.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JournalSync;