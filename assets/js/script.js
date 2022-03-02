/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

//Today's Date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


// Change textarea color based on time of day
function timeIsNow() {

  var currentTime = moment().hour();

  $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > currentTime) {
      $(this).addClass("future");
    }
    else if (currentHour === currentTime) {
      $(this).addClass("present");
    } 
    else {
      $(this).addClass("past");
    };
  })
};


//Save Function
function plannerSave() {
  $(".saveBtn").on("click", function () {
    var info = $(".planner").each;
        // Save data to local storage
        localStorage.setItem("Information", info);
  });
}

//Load Function
function plannerLoad() {
  localStorage.getItem(plannerSave);

}

timeIsNow();
plannerLoad();
plannerSave();

