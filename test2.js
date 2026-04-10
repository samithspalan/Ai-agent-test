function findLargest(numbers) {
  if (numbers.length === 0) {
    console.log("Array is empty");
    return null;
  }
  let largest = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      