let num = prompt("Enter a number:");
num = Number(num);

if (isNaN(num)) {
  console.log("Invalid input");
} else {
  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }

  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}