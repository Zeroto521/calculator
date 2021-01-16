interface ExerciseArray {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const ratingDescriptionList = [
  'just the worst',
  'not too bad but could be better',
  'perfect'
]

const calculateExercise = (exerciseTimes: Array<number>, target: number): ExerciseArray => {
  const periodLength = exerciseTimes.length
  const trainingDays = exerciseTimes.filter(e => e > 0).length
  const success = exerciseTimes.every(e => e >= target)
  const average = exerciseTimes.reduce((a, b) => a + b) / periodLength

  let rating
  if (trainingDays === periodLength)
    rating = 3
  else if (trainingDays >= periodLength / 2)
    rating = 2
  else
    rating = 1

  const ratingDescription = ratingDescriptionList[rating - 1]

  return {
    periodLength,
    trainingDays,
    success,
    target,
    rating,
    ratingDescription,
    average
  }
}

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1], 2))
