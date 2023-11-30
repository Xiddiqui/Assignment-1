// senario 1
var add = function () {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log("sum", sum);
};
add();
// senario 2
var checkEvenOrOdd = function () {
    var number = 10;
    var check = number % 2 == 0;
    console.log("isEvent", check);
};
checkEvenOrOdd();
// senario 3
var calculateArea = function (length, width) {
    var result = length * width;
    console.log(result);
};
calculateArea(10, 20);
// senario 4
var ReverseString = function (str) {
    var newString = str.split(/(?:)/u).reverse().join("");
    console.log("reversedString", newString);
};
ReverseString("abdullah");
// senario 5
var convertCelsiusToFahrenheit = function (c) {
    var f = 0;
    f = c * (9 / 5) + 32;
    console.log("The value of the temperature in Fahrenheit is " + f);
};
convertCelsiusToFahrenheit(10);
