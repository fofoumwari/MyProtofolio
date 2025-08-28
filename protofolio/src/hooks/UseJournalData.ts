// src/hooks/useJournalData.ts
import { useState, useEffect } from 'react';

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  content: string;
  summary: string;
  tags: string[];
}

export const useJournalData = (webAppUrl: string) => {
  const [data, setData] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJournalData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(webAppUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const journalData: JournalEntry[] = await response.json();
      setData(journalData);
    } catch (err) {
      console.error('Error fetching journal entries:', err);
      setError('Failed to load journal entries. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const generateSummary = async (rowId: string, content: string) => {
    try {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'generateSummary',
          rowId,
          content
        }),
      });

      const result = await response.json();
      return result.summary;
    } catch (error) {
      console.error('Error generating summary:', error);
      throw new Error('Failed to generate summary');
    }
  };

  useEffect(() => {
    fetchJournalData();
  }, [webAppUrl]);

  return { data, loading, error, refetch: fetchJournalData, generateSummary };
};