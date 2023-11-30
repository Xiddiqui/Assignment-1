// senario 1

const add = () => {
  let num1 = 10;
  let num2 = 20;
  let sum = num1 + num2;
  console.log("sum", sum);
};
add();

// senario 2

const checkEvenOrOdd = () => {
  let number = 10;
  let check = number % 2 == 0;
  console.log("isEvent", check);
};

checkEvenOrOdd();

// senario 3

const calculateArea = (length: number, width: number) => {
  let result = length * width;
  console.log(result);
};

calculateArea(10, 20);

// senario 4

const ReverseString = (str: string) => {
  let newString = str.split(/(?:)/u).reverse().join("");
  console.log("reversedString", newString);
};

ReverseString("abdullah");

// senario 5

const convertCelsiusToFahrenheit = (c: number) => {
  let f = 0;
  f = c * (9 / 5) + 32;
  console.log("The value of the temperature in Fahrenheit is " + f);
};

convertCelsiusToFahrenheit(10);
