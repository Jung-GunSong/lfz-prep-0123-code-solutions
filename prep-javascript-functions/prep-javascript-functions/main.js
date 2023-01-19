function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const resultAddTwoNumbers = addTwoNumbers(2, 2);
console.log(resultAddTwoNumbers);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const resultConvertHoursToMinutes = convertHoursToMinutes(2);
console.log(resultConvertHoursToMinutes);

function getGreeting(string) {
  return `Hello ${string}!`;
}
const resultGetGreeting = getGreeting('World');
console.log(resultGetGreeting);

function addAndMulitplyByFive(num1, num2) {
  return (num1 + num2) * 5;
}
const resultAddAndMultiplyByFive = addAndMulitplyByFive(10, 5);
console.log(resultAddAndMultiplyByFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const resultMultiplyAndDivide5 = multiplyAndDivideBy5(35, 10);
console.log(resultMultiplyAndDivide5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const resultSubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log(resultSubtractTwoNumbers);

function getCircumference(radius) {
  return 2 * radius * Math.PI;
}
const resultGetCircumference = getCircumference(5);
console.log(resultGetCircumference);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const resultGetFullName = getFullName('Justin', 'Song');
console.log(resultGetFullName);

function cube(num) {
  return Math.pow(num, 3);
}
const resultCube = cube(5);
console.log(resultCube);
