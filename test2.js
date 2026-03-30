// This file contains intentional errors for testing purposes
// corrected version

/**
 * Calculates the sum of two numbers.
 * 
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function calculateSum(a, b) {
  // Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  
  console.log("Adding numbers: " + a + " and " + b);
  return a + b;
}

/**
 * Checks if a number is large or small.
 * 
 * @param {number} num The number to check.
 * @returns {string} "Large" if num is greater than 10, "Small" otherwise.
 */
function checkNumber(num) {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  
  if (num > 10) {
    return "Large";
  } else {
    return "Small";
  }
}

try {
  const result = calculateSum(5, 10);
  console.log("Result:", result);
  
  const numberCheck = checkNumber(20);
  console.log("Number check:", numberCheck);
} catch (error) {
  console.error("Error:", error.message);
}

// Do not try to call a string as a function
const notAFunction = "I am a string";
console.log("Not a function:", notAFunction);

// Call the correct function name
try {
  const numberCheck = checkNumber(20);
  console.log("Number check:", numberCheck);
} catch (error) {
  console.error("Error:", error.message);
}