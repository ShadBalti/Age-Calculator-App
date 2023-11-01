function calculateAge() {
  let userDate = document.getElementById('birthdate').value

  if (userDate == NaN || userDate == '') { 
    return alert('Enter a valid date of birth. You may have not entered a complete date or entered a non-existent date information.') 
  }
  const birthdate = new Date(userDate)
  const currentDate = new Date()
  // reset the result and error element
  document.getElementById('result').style.display = 'none'
  document.getElementById('error').style.display = 'none'
  // if the birthdate is greater than the current date, return an error
  if (birthdate > currentDate) {
    document.getElementById('error').style.display = 'block'
    document.getElementById('error').innerHTML =
      'Please enter a valid birthdate.'
    return
  }
  // but if the birthdate is less than the current date, calculate the difference and display the result
  document.getElementById('result').style.display = 'block'
  const ageInMilliseconds = currentDate - birthdate
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
  const millisecondsInMonth = millisecondsInYear / 12
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000
  const millisecondsInDay = 24 * 60 * 60 * 1000

  const years = Math.floor(ageInMilliseconds / millisecondsInYear)
  const remainingMilliseconds = ageInMilliseconds % millisecondsInYear
  const months = Math.floor(remainingMilliseconds / millisecondsInMonth)
  const remainingMilliseconds2 = remainingMilliseconds % millisecondsInMonth
  const weeks = Math.floor(remainingMilliseconds2 / millisecondsInWeek)
  const days = Math.floor(
    (remainingMilliseconds2 % millisecondsInWeek) / millisecondsInDay,
  )
  // append the result to the result element

  document.getElementById('years').textContent = years
  document.getElementById('months').textContent = months
  document.getElementById('weeks').textContent = weeks
  document.getElementById('days').textContent = days
  document.getElementById('hours').textContent = days * 24
  document.getElementById('minutes').textContent = days * 24 * 60
  document.getElementById('seconds').textContent = days * 24 * 60 * 60
  document.getElementById('milliseconds').textContent =
    (millisecondsInYear * ageInMilliseconds) / millisecondsInYear;

  
            // Calculate life milestones
            const retirementAge = 65; // Change to the desired retirement age
            const halfLife = years / 2;
            const age18 = 18;
            const age21 = 21;
            const age30 = 30;

            document.getElementById('retirementAge').textContent = retirementAge;
            document.getElementById('halfLife').textContent = halfLife.toFixed(2); // Show with two decimal places
            document.getElementById('age18').textContent = age18;
            document.getElementById('age21').textContent = age21;
            document.getElementById('age30').textContent = age30;
            // Add more milestones as needed
}
