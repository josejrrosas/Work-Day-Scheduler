var currentDayEl = $('#currentDay');

function displayDay() {
    var today = moment().format('dddd[, ]MMMM Do');
    currentDayEl.text(today);
  }

  displayDay();