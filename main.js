function calculateAge() {
  let userDate = document.getElementById("birthdate").value;

  if (userDate == NaN || userDate == '') {
    alert('fuck you')
  } else {
    const birthdate = new Date(userDate);
    const currentDate = new Date();

    if (birthdate > currentDate) {
      document.getElementById("result").innerHTML = "Please enter a valid birthdate.";
      return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const millisecondsInMonth = millisecondsInYear / 12;
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
    const millisecondsInDay = 24 * 60 * 60 * 1000;

    let age = {
      ageInMilliseconds: currentDate - birthdate,

      millisecondsInYear: 1000 * 60 * 60 * 24 * 365.25,
      millisecondsInMonth: millisecondsInYear / 12,
      millisecondsInWeek: 7 * 24 * 60 * 60 * 1000,
      millisecondsInDay: 24 * 60 * 60 * 1000,


      secondsInYear: 60 * 60 * 24 * 365.25,
      secondsInMonth: secondsInYear / 12,
      secondsInWeek: 7 * 24 * 60,
      secondsInDay: 24*60*60,
    }






    const years = Math.floor(ageInMilliseconds / millisecondsInYear);
    const remainingMilliseconds = ageInMilliseconds % millisecondsInYear;
    const months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    const remainingMilliseconds2 = remainingMilliseconds % millisecondsInMonth;
    const weeks = Math.floor(remainingMilliseconds2 / millisecondsInWeek);
    const days = Math.floor((remainingMilliseconds2 % millisecondsInWeek) / millisecondsInDay);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = days * 24;
    document.getElementById("minutes").textContent = days * 24 * 60;
    document.getElementById("seconds").textContent = days * 24 * 60 * 60;
    document.getElementById("milliseconds").textContent = millisecondsInYear * ageInMilliseconds / millisecondsInYear;
    console.log(ageInMilliseconds);




  }
}