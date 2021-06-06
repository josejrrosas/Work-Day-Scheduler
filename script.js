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

function time8() {
    var textInput1 = document.querySelector("#time8am");
    var textOuput1 = document.querySelector("#time8am");
    var button1 = document.querySelector(".saveBtn1");
  
    button1.addEventListener("click", saveLocalStorage1);
  
    textOuput1.textContent = localStorage.getItem("text1");
    textInput1.value = localStorage.getItem("text1");
  
    function saveLocalStorage1() {
      localStorage.setItem("text1", textInput1.value);
  
      textOuput1.textContent = textInput1.value;
    }
  }
  time8();
  

function time9() {
    var textInput2 = document.querySelector("#time9am");
    var textOuput2 = document.querySelector("#time9am");
    var button2 = document.querySelector(".saveBtn2");
  
    button2.addEventListener("click", saveLocalStorage2);
  
    textOuput2.textContent = localStorage.getItem("text2");
    textInput2.value = localStorage.getItem("text2");
  
    function saveLocalStorage2() {
      localStorage.setItem("text2", textInput2.value);
  
      textOuput2.textContent = textInput2.value;
    }
  }
  time9();
  

function time10() {
    var textInput3 = document.querySelector("#time10am");
    var textOuput3 = document.querySelector("#time10am");
    var button3 = document.querySelector(".saveBtn3");
  
    button3.addEventListener("click", saveLocalStorage3);
  
    textOuput3.textContent = localStorage.getItem("text3");
    textInput3.value = localStorage.getItem("text3");
  
    function saveLocalStorage3() {
      localStorage.setItem("text3", textInput3.value);
  
      textOuput3.textContent = textInput3.value;
    }
  }
  time10();
  

function time11() {
    var textInput4 = document.querySelector("#time11am");
    var textOuput4 = document.querySelector("#time11am");
    var button4 = document.querySelector(".saveBtn4");
  
    button4.addEventListener("click", saveLocalStorage4);
  
    textOuput4.textContent = localStorage.getItem("text4");
    textInput4.value = localStorage.getItem("text4");
  
    function saveLocalStorage4() {
      localStorage.setItem("text4", textInput4.value);
  
      textOuput4.textContent = textInput4.value;
    }
  }
  time11();
  

function time12() {
    var textInput5 = document.querySelector("#time12pm");
    var textOuput5 = document.querySelector("#time12pm");
    var button5 = document.querySelector(".saveBtn5");
  
    button5.addEventListener("click", saveLocalStorage5);
  
    textOuput5.textContent = localStorage.getItem("text5");
    textInput5.value = localStorage.getItem("text5");
  
    function saveLocalStorage5() {
      localStorage.setItem("text5", textInput5.value);
  
      textOuput5.textContent = textInput5.value;
    }
  }
  time12();
  

function time1() {
    var textInput6 = document.querySelector("#time1pm");
    var textOuput6 = document.querySelector("#time1pm");
    var button6 = document.querySelector(".saveBtn6");
  
    button6.addEventListener("click", saveLocalStorage6);
  
    textOuput6.textContent = localStorage.getItem("text6");
    textInput6.value = localStorage.getItem("text6");
  
    function saveLocalStorage6() {
      localStorage.setItem("text6", textInput6.value);
  
      textOuput6.textContent = textInput6.value;
    }
  }
  time1();
  

function time2() {
    var textInput7 = document.querySelector("#time2pm");
    var textOuput7 = document.querySelector("#time2pm");
    var button7 = document.querySelector(".saveBtn7");
  
    button7.addEventListener("click", saveLocalStorage7);
  
    textOuput7.textContent = localStorage.getItem("text7");
    textInput7.value = localStorage.getItem("text7");
  
    function saveLocalStorage7() {
      localStorage.setItem("text7", textInput7.value);
  
      textOuput7.textContent = textInput7.value;
    }
  }
  time2();
  

function time3() {
    var textInput8 = document.querySelector("#time3pm");
    var textOuput8 = document.querySelector("#time3pm");
    var button8 = document.querySelector(".saveBtn8");
  
    button8.addEventListener("click", saveLocalStorage8);
  
    textOuput8.textContent = localStorage.getItem("text8");
    textInput8.value = localStorage.getItem("text8");
  
    function saveLocalStorage8() {
      localStorage.setItem("text8", textInput8.value);
  
      textOuput8.textContent = textInput8.value;
    }
  }
  time3();
  

function time4() {
    var textInput9 = document.querySelector("#time4pm");
    var textOuput9 = document.querySelector("#time4pm");
    var button9 = document.querySelector(".saveBtn9");
  
    button9.addEventListener("click", saveLocalStorage9);
  
    textOuput9.textContent = localStorage.getItem("text9");
    textInput9.value = localStorage.getItem("text9");
  
    function saveLocalStorage9() {
      localStorage.setItem("text9", textInput9.value);
  
      textOuput9.textContent = textInput9.value;
    }
  }
  time4();

function time5() {
    var textInput10 = document.querySelector("#time5pm");
    var textOuput10 = document.querySelector("#time5pm");
    var button10 = document.querySelector(".saveBtn10");
  
    button10.addEventListener("click", saveLocalStorage10);
  
    textOuput10.textContent = localStorage.getItem("text10");
    textInput10.value = localStorage.getItem("text10");
  
    function saveLocalStorage10() {
      localStorage.setItem("text10", textInput10.value);
  
      textOuput10.textContent = textInput10.value;
    }
  }
  time5();
  