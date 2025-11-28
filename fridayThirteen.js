// ejercicio 3 FRIDAY 13

function myersCalendar(year) {
  if (year < 1900) return [];
  let dateFound = [];
  for (let month = 0; month <= 11; month++) {
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      let fullDate = new Date(year, month, day);

      let itsFriday13 = fullDate.getDay() === 5 && fullDate.getDate() === 13;
      let itsOctober31 = fullDate.getMonth() === 9 && fullDate.getDate() === 31;

      if (!itsFriday13 && !itsOctober31) {
        continue;
      }

      dateFound.push(fullDate.toISOString().split("T")[0]);
    }
  }
  return dateFound;
}

console.table(myersCalendar(2020));
