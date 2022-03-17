function suma(num1, num2) {
  return num1 + num2
}

// console.log(suma(2,3))

function resta(num1, num2) {
  return num1 - num2
}

// console.log(resta(30,2))

function multiplicar(factor1, factor2) {

  return Array(factor1).(factor2).reduce(suma, 0);
}

// console.log(multiplicar(6,3))

function dividir(dividendo, divisor) {
  let resto = dividendo
  let total = 0;
  for (let i = 1; resto >= divisor; i++) {
    resto = resta(resto, divisor);
    total = i
  }
  return total;
}

// console.log(dividir(90,2))
