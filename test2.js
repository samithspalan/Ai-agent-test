function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  console.log("Numbers:", numbers);
  console.log("Largest number:", largest);

  if (largest % 2 === 0) {
    console.log("The largest number is even");
  } else {
    console.log("The largest number is odd");
  }

  return largest;
}

let values = [12, 45, 7, 89, 34, 22];
findLargest(values);