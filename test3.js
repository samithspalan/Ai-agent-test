function calculateMarks(studentName, marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  let average = total / marks.length;
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 75) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else {
    grade = "Fail";
  }
  console.log("Student Name: " + studentName);
  console.log("Total Marks: " + total);
  console.log("Average: " + average);
  if (average > 60) {
    console.log("Status: Pass");
  } else {
    console.log("Status: Fail");
  }
  return { name: studentName, total: total, average: average, grade: grade };
}

let scores = [80, 70, 90, 60, 85];
console.log(calculateMarks("Samith", scores));