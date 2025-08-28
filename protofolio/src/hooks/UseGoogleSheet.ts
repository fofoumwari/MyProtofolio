import { useState, useEffect } from 'react';

// Simple function to read public Google Sheet as CSV
export const useGoogleSheets = (sheetId: string, sheetName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Convert sheet to CSV format
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
        const response = await fetch(url);
        const csvData = await response.text();
        
        // Convert CSV to JSON
        const rows = csvData.split('\n').slice(1); // Skip header
        const jsonData = rows.map(row => {
          const columns = row.split(',').map(col => col.replace(/^"|"$/g, ''));
          return {
            id: columns[0],
            title: columns[1],
            date: columns[2],
            content: columns[3],
            summary: columns[4],
            tags: columns[5] ? columns[5].split(';') : []
          };
        });
        
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetId, sheetName]);

  return { data, loading };
};