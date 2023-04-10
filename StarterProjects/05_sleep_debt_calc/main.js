function getSleepHours(day) {
    switch (day) {
  
      case 'Monday':
      return 8
      break
  
      case 'Tuesday':
      return 7
      break
  
      case 'Wednesday':
      return 4
      break
  
      case 'Thursday':
      return 6
      break
  
      case 'Friday':
      return 7
      break
  
      case 'Saturday':
      return 7
      break
  
      case 'Sunday':
      return 9
      break
    }
  }
  
function getActualSleepHours() {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  }
  
const idealHours = 7 * 7
  
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let dif = Math.abs(actualSleepHours - idealHours)
    
    if (actualSleepHours == idealHours) {return 'Perfect amount of sleep - no sleep debt!'}
    if (actualSleepHours < idealHours) {return `Your sleep debt is ${dif} hours`}
    if (actualSleepHours > idealHours) {return `Your sleep credit is ${dif} hours`}
  }
  
console.log(calculateSleepDebt())