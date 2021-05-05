
// create five variables and assign them values // each variable should reference a different primitive data type //  REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let testString = "spaghetti";
let testNumber = 11;
let testBoolean = false;
let testUndefined;
let testNull = null;

// print the type of each variable in this order: // string, number, boolean, undefined, null
console.log(testString + " " + testNumber + " " + testBoolean + " " + testUndefined + " " + testNull);

// create a variable that references a template literal // inside the template literal, use two variables
let testTemplateLiteral = `"This is my test string and test number, respectively: '${testString}' and ${testNumber}"`;
console.log(testTemplateLiteral);

// reassign the value of the variable that references "null"
testNull = "Value no longer null";

// print the value and its type
console.log(testNull);
console.log(typeof testNull);

// print a variable that causes a ReferenceError
// console.log(testNumber);
// console.log(testNumber);

// alter the previous line to no longer cause a ReferenceError
console.log(testNumber);
