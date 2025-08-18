//Student Grades Management System
//You’re building a simple program to help a teacher record and analyze students’ grades.

//  1.Create a student list
// Each student is an object with:
// { name: "Alice", grades: [85, 90, 78], section: "A" }
// Put several students inside an array.
const students = [
  { name: "Codelise", grades: [85, 98, 78, 75], section: "A" },
  { name: "Aeryun", grades: [90, 95, 87, 88], section: "A" },
  { name: "Ashley", grades: [90, 91, 91, 93], section: "A" },
  { name: "Robert", grades: [76, 71, 73, 74], section: "A" },
];

// 2. Calculate the average grade of a single student (loop or reduce).
students.forEach((student) => {
  student.avgGrade = // gawa gawa ko lang para mag store ung avg grade na nacompute
    Math.round(
      // round to make it clean
      student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length
    );

  console.log(`${student.name} has an average of ${student.avgGrade}`);

  // award for student with 90 above avg
  if (student.avgGrade >= 90) {
    console.log(`🎖️ ${student.name} has an award!`);
  } else if (student.avgGrade >= 75) {
    console.log(`Student ${student.name} Passed away!`);
  } else {
    console.log(`${student.name} Failed IDIOT!`);
  }
});
