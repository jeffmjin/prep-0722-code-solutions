function addTwoNumbers(x, y) {
  return x + y;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(x, y) {
  return x * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(x, y) {
  return 'Hello' + ' ' + x + '!';
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise', subtractTwoNumbersResult);

function getCircleCircumference(x, y) {
  return 2 * pi * x;
}

const pi = 3.14159265359;
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise', getCircleCircumferenceResult);

function getFullName(x, y) {
  return x + ' ' + y;
}

var getFullNameResult = getFullName('Jeff', 'Jin');
console.log(getFullNameResult);

function cube(x, y) {
  return Math.pow(x, 3);
}

var getCubeResult = cube(5);
console.log(getCubeResult);
