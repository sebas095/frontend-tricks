const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();
const currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const dates = document.getElementById("dates");
const month = document.getElementById("month");
const year = document.getElementById("year");

const prevMonthDOM = document.getElementById("prev-month");
const nextMonthDOM = document.getElementById("next-month");

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

const writeMonth = (month) => {
  for (let i = startDay(month); i > 0; i--) {
    dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-days">
      ${getTotalDays(month - 1) - (i - 1)}
    </div>`;
  }

  for (let i = 1; i <= getTotalDays(month); i++) {
    if (i === currentDay) {
      dates.innerHTML += `<div class="calendar__date calendar__item calendar__today">
        ${i}
      </div>`;
    } else {
      dates.innerHTML += `<div class="calendar__date calendar__item">
        ${i}
      </div>`;
    }
  }

  const lastDay = startDay(month, getTotalDays(month));
  let firstDaysNextMonth = 1;

  for (let i = lastDay + 1; i <= 6; i++) {
    dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-days">
      ${firstDaysNextMonth++}
    </div>`;
  }
};

const getTotalDays = (month) => {
  if (month === -1) month = 11;

  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  ) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
};

const isLeap = () => {
  return (
    (currentYear % 100 !== 0 && currentYear % 4 !== 0) ||
    currentYear % 400 !== 0
  );
};

const startDay = (month, day = 1) => {
  const start = new Date(currentYear, month, day);
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
};

const lastMonth = () => {
  if (monthNumber !== 0) {
    monthNumber--;
  } else {
    monthNumber = 11;
    currentYear--;
  }

  setNewDate();
};

const nextMonth = () => {
  if (monthNumber !== 11) {
    monthNumber++;
  } else {
    monthNumber = 0;
    currentYear++;
  }

  setNewDate();
};

const setNewDate = () => {
  currentDate.setFullYear(currentYear, monthNumber, currentDay);
  month.textContent = monthNames[monthNumber];
  year.textContent = currentYear.toString();
  dates.textContent = "";
  writeMonth(monthNumber);
};

prevMonthDOM.addEventListener("click", lastMonth);
nextMonthDOM.addEventListener("click", nextMonth);
writeMonth(monthNumber);
