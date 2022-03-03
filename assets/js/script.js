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
    var planTime = $(this).parent().attr("id");
    var planText = $(this).siblings(".planText").val();

    localStorage.setItem(planTime, JSON.stringify(planText));
  });
}

//Load Function
function plannerLoad() {
$(".time-block").each(function () {
  var loadPlan = $(this).attr("id");
  var planLoad = localStorage.getItem(loadPlan);

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

    if (currentHour > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    else if (currentHour === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    };
  })
};

plannerLoad();
plannerSave();
timeIsNow();

