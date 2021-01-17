import express from 'express';

import calculateBMI from './calculator/bmiCalculator';

const app = express();

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack!');
});


app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  if (!weight || !height) {
    res.json({ 'error': 'malformatted parameters' });
  }

  try {
    const bmi = calculateBMI(weight, height);
    res.json({ weight, height, bmi });
  } catch (_) {
    res.json({ 'error': 'malformatted parameters' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
