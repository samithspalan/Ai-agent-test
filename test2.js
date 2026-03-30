// This file contains intentional errors for testing purposes

function calculateSum(a, b) {
  // Syntax error: Missing closing parenthesis
  console.log("Adding numbers: " + a + " and " + b;
  return a + b;
}

// Reference error: calling a variable that doesn't exist
console.log(nonExistentVariable);

function checkNumber(num) {
  if (num > 10 { // Syntax error: Missing closing parenthesis in if statement
    return "Large";
  } else {
    return "Small";
  }
}

const result = calculateSum(5, 10);
console.log("Result:", result);

// Logic error: trying to call a string as a function
const notAFunction = "I am a string";
notAFunction();

// Typo in function name
checkNumbr(20);
