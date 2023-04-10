/*
Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ 
if any of the three grades are less than 0 or greater than 100

0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

function finalGrade(n1,n2,n3) {
  if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {return 'You have entered an invalid grade.'}
  
  let avg = (n1 + n2 + n3) / 3
  
  if (avg <= 59) {return 'F'}
  else if (avg <= 69) {return 'D'}
  else if (avg <= 79) {return 'C'}
  else if (avg <= 89) {return 'B'}
  else if (avg <= 100) {return 'A'}
}