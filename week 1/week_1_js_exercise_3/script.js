
function average(testScores) {
  if (testScores.length ===0) {
    return 0
  }
  
let sum = 0
  
  for(let i=0; i < testScores.length; i++) {
    sum += testScores[i]
  }

  const average = sum / testScores.length;
  return average;
}

const testScores = [45, 82, 17, 69, 38];

const avg = average(testScores);

function letterGrade(percentage) {

  let grade;
  
  switch (true) {
    case percentage >= 91:
      grade = "A";
      break;
    case percentage >= 81:
      grade = "B";
      break;
    case percentage >= 71:
      grade = "C";
      break;
    case percentage >= 60:
      grade = "D";
      break;
    default:
    case percentage < 60:
      grade = "F";
  }
  return grade;
  
}

const grade = letterGrade(avg);

if (grade === "A")
  alert("User has received an A.");

if (grade === "F")
  alert("User has received an F");

console.log("The letter grade average is:" + letterGrade(avg));