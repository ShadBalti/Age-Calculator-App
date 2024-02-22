var countdownInterval;

function calculateAge() {
  let userDate = document.getElementById('birthdate').value

  if (userDate == NaN || userDate == '') { 
    document.getElementById('error').style.display = 'block'
    document.getElementById('error').textContent = 'Enter a valid date of birth. You may have not entered a complete date or entered a non-existent date information.'
    return
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
  document.getElementById('resultSection').style.display = 'block'
  document.getElementById('result').style.display = 'block'
  const ageInMilliseconds = currentDate - birthdate
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
  const millisecondsInMonth = millisecondsInYear / 12
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000
  const millisecondsInDay = 24 * 60 * 60 * 1000
  const millisecondsInHour = 60*60*1000;
  const millisecondsInMinute = 60*1000;
  const millisecondsInSecond = 1000;

  const years = Math.floor(ageInMilliseconds / millisecondsInYear)
  const remainingMilliseconds = ageInMilliseconds % millisecondsInYear
  const months = Math.floor(remainingMilliseconds / millisecondsInMonth)
  const remainingMilliseconds2 = remainingMilliseconds % millisecondsInMonth
  const weeks = Math.floor(remainingMilliseconds2 / millisecondsInWeek)
  const days = Math.floor(
    (remainingMilliseconds2 % millisecondsInWeek) / millisecondsInDay,
  )
  const ageInHours = Math.floor(ageInMilliseconds/millisecondsInHour);
  const ageInMinutes = Math.floor(ageInMilliseconds/millisecondsInMinute);
  const ageInSeconds = Math.floor(ageInMilliseconds/millisecondsInSecond);

  document.getElementById('years').textContent = years
  document.getElementById('months').textContent = months
  document.getElementById('weeks').textContent = weeks
  document.getElementById('days').textContent = days

  //Section Age in
    document.getElementById('hours').textContent = ageInHours;
    document.getElementById('minutes').textContent = ageInMinutes;
    document.getElementById('seconds').textContent = ageInSeconds;
    document.getElementById('milliseconds').textContent = ageInMilliseconds;
  
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
  if(countdownInterval){
    clearInterval(countdownInterval)
  }
  countdownInterval = setInterval(() => calculateNextBirthday(birthdate), 1000);
  document.getElementsByClassName('nextBirthdayResults')[0].style.display = 'block';
}

function calculateNextBirthday(birthdate) {
  currentDate = new Date();
  const nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const timeUntilNextBirthday = nextBirthday - currentDate;

  const daysUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
  const hoursUntilNextBirthday = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesUntilNextBirthday = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
  const secondsUntilNextBirthday = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);

  document.getElementById('nextBirthdayDays').textContent = daysUntilNextBirthday;
  document.getElementById('nextBirthdayHours').textContent = hoursUntilNextBirthday;
  document.getElementById('nextBirthdayMinutes').textContent = minutesUntilNextBirthday;
  document.getElementById('nextBirthdaySeconds').textContent = secondsUntilNextBirthday;
}