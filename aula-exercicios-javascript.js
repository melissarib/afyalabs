// Exercício 1: FizzBuzz

// Se n é divisível por 3 e 5, substitua por “FizzBuzz”.
// Se n é divisível por 3, substitua por “Fizz”.
// Se n é divisível por 5, substitua por “Buzz”.
// Se n não é divisível nem por 3 nem por 5, apenas é dito n.
 
let resultado = fizzBuzz();
console.log(resultado)

function fizzBuzz(entrada){
  if(typeof entrada !== 'number')
   return "Não é um número";
  if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return "FizzBuzz"
  if (entrada % 3 === 0)
    return 'Fizz';
  if (entrada % 5 === 0)
    return "Buzz";
  
return entrada;
}


// Exercício 2: String Reversa
let newStr = '';

function reverseAString(str){
  for (let i = str.length - 1; i >=0; i--){
    newStr += str[i];
  }
  console.log(newStr);
}

let resultado = reverseAString('Hello Gama Academy')

// Exercício 3: Conversão de Cº para Fº

function convertToFahrenheit(value) {
	return value * 1.8 + 32
}

let result = convertToFahrenheit(40)
console.log('O valor em Fahrenheit é ${result}');