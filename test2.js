function findLargest(numbers) {
  let largest = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }
  console.log("Numbers:", numbers);
  console.log("Largest number:", largest)
}
