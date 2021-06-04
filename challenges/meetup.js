const DAYS_OF_WEEK = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

const DESCR_PARSER = {
  '1st': 1,
  '2nd': 2,
  '3rd': 3,
  '4th': 4,
  '5th': 5
};

const WEEK_LENGTH = 7;

function teenthParser(year, month, dayOfWeek) {
  let dayGuess = 13;
  let dateGuess = (dayOfMonth) => new Date(year, month, dayOfMonth);
  while (dateGuess(dayGuess).getDay() !== DAYS_OF_WEEK[dayOfWeek]) {
    dayGuess++;
    if (dayGuess > 19) throw new Error();
  }
  return new Date(year, month, dayGuess);
}

function subtractDays(actualDay, firstDay) {
  if (actualDay - firstDay >= 0) return (actualDay - firstDay);
  return WEEK_LENGTH + actualDay - firstDay;
}

function descParser(descriptor) {
  if (descriptor in DESCR_PARSER) return DESCR_PARSER[descriptor];
  throw new Error();
}

function detectMonthJump(actualMonth, date) {
  return (actualMonth !== date.getMonth());
}


function dayParserHelper(year, month, dayOfWeek, descriptor) {
  let firstDay = (new Date(year, month, 1)).getDay();
  let firstOccurenceOfDay = 1 + subtractDays(DAYS_OF_WEEK[dayOfWeek], firstDay);
  console.log(descriptor);
  let dayOfMonth = firstOccurenceOfDay + ((descParser(descriptor) - 1) *
    WEEK_LENGTH);
  let returnDate = new Date(year, month, dayOfMonth);
  return returnDate;
}

function lastHandler(year, month, dayOfWeek) {
  let returnDate;
  let options = ['5th', '4th', '3rd'];
  let descriptor;
  for (let index = 0; index < options.length; index++) {
    descriptor = options[index];
    returnDate = dayParserHelper(year, month, dayOfWeek, descriptor);
    if (!detectMonthJump(month, returnDate)) return returnDate;
  }
  throw new Error();
}

function normalDescHandler(year, month, dayOfWeek, descriptor) {
  let returnDate = dayParserHelper(year, month, dayOfWeek, descriptor);
  if (detectMonthJump(month, returnDate)) throw new Error();
  return returnDate;
}


function dayParser(year, month, dayOfWeek, descriptor) {
  if (descriptor === 'last') return lastHandler(year, month, dayOfWeek);
  if (!Object.keys(DESCR_PARSER).includes(descriptor)) throw new Error();
  return normalDescHandler(year, month, dayOfWeek, descriptor);
}

function meetupDay(year, month, dayOfWeek, descriptor) {
  if (descriptor === 'teenth') {
    return teenthParser(year, month, dayOfWeek);
  }
  return dayParser(year, month, dayOfWeek, descriptor);
}

module.exports = meetupDay;
