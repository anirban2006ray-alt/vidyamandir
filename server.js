// server.js (Node.js / Express example)
const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your frontend development server (e.g., Vite on port 5173)
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend connected!' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
