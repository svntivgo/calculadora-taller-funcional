function suma(num1, num2) {
  return num1 + num2
}

console.log("Resultado de suma "+suma(2,3))

function resta(num1, num2) {
  return num1 - num2
}

console.log("Resultado de resta "+resta(30,2))

function multiplicar(factor1, factor2) {

  return Array(factor1).fill(factor2).reduce(suma, 0);
}

console.log("Resultado de multiplicacion "+multiplicar(6,3))

function dividir(dividendo, divisor) {
  let resto = dividendo
  let total = 0;
  for (let i = 1; resto >= divisor; i++) {
    resto = resta(resto, divisor);
    total++
  }
  return total;
}

console.log("Resultado de division "+dividir(90,2))
