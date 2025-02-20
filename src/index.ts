import express from 'express';

const app = express();

const port = process.env.PORT ?? '3000';

app.get('/', (req, res) => {
  res.send('Hello, Internet!');
  console.log('Response sent.');
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
