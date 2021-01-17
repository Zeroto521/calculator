import express from 'express'

import calculateBMI from './bmiCalculator'

const app = express()

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack!')
})


app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight)
  const height = Number(req.query.height)

  if (!weight || !height) {
    res.json({ 'error': 'malformatted parameters' })
  }

  try {
    const bmi = calculateBMI(weight, height)
    res.json({ weight, height, bmi })
  } catch (e) {
    res.json({ 'error': e.message })
  }

})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
