 //Variables
var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var thirteen = $("#13");
var fourteen = $("#14");
var fifthteen = $("#15");
var sixteen = $("#16");
var seventeen = $("#17");
 
 //Today's Date
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

 //Save Function
 function plannerSave() {
  $(".saveBtn").on("click", function() {
    //Targets Parent of the buttons ID
    var planTime = $(this).parent().attr("id");
    //Targets siblings, aka other elements with the "planText" class.
    var planText = $(this).siblings(".planText").val();

    //Saves to local storage.
    localStorage.setItem(planTime, JSON.stringify(planText));
  });
}

//Load Function
function plannerLoad() {
$(".time-block").each(function () {
  //Targets id of the parent. This took the full 2 weeks!!!!
  var loadPlan = $(this).attr("id");
  //Pulls from local storage.
  var planLoad = localStorage.getItem(loadPlan);

  //Pulls into "planText" using the "planLoad" variable above.
  if (planLoad !== null) {
      $(this).children(".planText").val(planLoad);
  }
});
}

// Change textarea color based on time of day
function timeIsNow() {

  var currentTime = moment().hour();

  $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    //Adds Royal Blue color to future classes
    if (currentHour > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    //Adds Red to current hour for urgency
    else if (currentHour === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    //Grays out past hours
    else {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    };
  })
};

//Function Calls
plannerLoad();
plannerSave();
timeIsNow();

