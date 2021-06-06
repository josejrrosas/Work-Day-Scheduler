// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDayEl = $('#currentDay');

function displayDay() {
    var today = moment().format('dddd[, ]MMMM Do');
    currentDayEl.text(today);
  }
  displayDay();

  //if hour is less than current time then make text area grey
  //if hour is greater than current time then make text area green
  //if hour is same as current time then make text area red
    var currentTime = moment().format("HH");
    var time8am = moment().format("08:00" , "hh");
    var time9am = moment().format("09:00" , "hh");
    var time10am = moment().format("10:00" , "hh");
    var time11am = moment().format("11:00" , "hh");
    var time12pm = moment().format("12:00" , "hh");
    var time1pm = moment().format("13:00" , "hh");
    var time2pm = moment().format("14:00" , "hh");
    var time3pm = moment().format("15:00" , "hh");
    var time4pm = moment().format("16:00" , "hh");
    var time5pm = moment().format("17:00" , "hh");

timeArray = [time8am , time9am ,time10am ,time11am ,time12pm ,
                time1pm ,time2pm ,time3pm ,time4pm ,time5pm];
idArray = ["time8am" , "time9am" ,"time10am" ,"time11am" ,"time12pm" ,
            "time1pm" ,"time2pm" ,"time3pm" ,"time4pm" ,"time5pm"];

            
for(i = 0; i < timeArray.length; i++ ){    
    var timeBlock = document.getElementById(idArray[i]);
    var currentTimeInteger = parseInt(currentTime);
    var scheduleTimeInteger = parseInt(timeArray[i]);
//currenttime and timearray parse as integer 
    if(scheduleTimeInteger < currentTimeInteger){
        timeBlock.classList.add("past");
    }

    else if(scheduleTimeInteger > currentTimeInteger){
        var timeBlock = document.getElementById(idArray[i]);
        timeBlock.classList.remove("past");
        timeBlock.classList.add("future");

    }

    else{
        var timeBlock = document.getElementById(idArray[i]);
        timeBlock.classList.remove("past");
        timeBlock.classList.remove("future");
        timeBlock.classList.add("present");
    }
}


//When user types something into .timeblock and clicks .saveBtn
// then the text is saved in local storage


var scheduleText = document.querySelector(".time-block");
var saveBtn = document.querySelector(".saveBtn");

renderLastRegistered();

function displayMessage(type, message) {
    scheduleText.textContent = message;
    scheduleText.setAttribute("class", type);
  }

function renderLastRegistered() {
var schedule = localStorage.getItem("schedule");

if (!schedule) {
    return;
}
scheduleText.textContent = schedule;
}


saveBtn.addEventListener("click", function(event) {
event.preventDefault();

var schedule = document.querySelector(".time-block").value;

if (schedule === "") {
    displayMessage("");
} 
else {
    localStorage.setItem("schedule", schedule);
    renderLastRegistered();
}
});