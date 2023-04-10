/*
Write a function, howOld(), that has two number parameters, age and year, and returns 
how old someone who is currently that age was (or will be) during that year. 

Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/

function howOld(age, year) {
  let yearToday = 2023

  if (year > yearToday) {
    let dif = year - yearToday
    age += dif
    return `You will be ${age} in the year ${year}.`
  }
  else if (year < yearToday && (yearToday - year <= age)) {
    let dif = yearToday - year
    age -= dif
    return `You were ${age} in the year ${year}`
  }
  else {
    dif = yearToday - year
    dif -= age
    return `The year ${year} was ${dif} years before you were born`
  }
}