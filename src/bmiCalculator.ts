const calculateBMI = (mass: number, height: number): string => {
  if (mass <= 0 || height <= 0) {
    throw new Error(`Provided values must be greater than 0!`)
  }

  const bmi = mass / height ** 2

  let messgae

  if (bmi < 25) {
    messgae = "Normal (healthy weight)"
  } else if (25 <= bmi && bmi <= 29) {
    messgae = "Overweight (not healthy weight)"
  } else {
    messgae = "Obese (not healthy weight)"
  }

  return messgae
}

console.log(calculateBMI(180, 74))
