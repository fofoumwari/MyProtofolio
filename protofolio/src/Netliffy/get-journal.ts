// netlify/functions/get-journal.js
exports.handler = async function(event, context) {
  try {
    // Your Google Sheets ID (just the ID, not the full URL)
    const SHEET_ID = '1vgo3keqAyGkhZ9cif2CX9iwOoZBGeOYMj0C8ycpmFdY';
    
    // Your API key (optional for public sheets, but recommended)
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY || '';
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Google Sheets API responded with ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};