function calculateGrade() {
    // Collecting marks for 5 subjects using prompt()
    let subject1 = Number(prompt("Enter marks for Subject 1 out of 100 :"));
    let subject2 = Number(prompt("Enter marks for Subject 2 out of 100 :"));
    let subject3 = Number(prompt("Enter marks for Subject 3 out of 100 :"));
    let subject4 = Number(prompt("Enter marks for Subject 4 out of 100 :"));
    let subject5 = Number(prompt("Enter marks for Subject 5 out of 100 :"));

    // Calculate total and average
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let averageMarks = totalMarks / 5;

    // Determine the grade using if-else statements
    let grade;
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else if (averageMarks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(`Total Marks: ${totalMarks} \n Average Marks: ${averageMarks} \n Grade: ${grade}`);
}