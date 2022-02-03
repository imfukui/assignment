var timeComp = 0;
var timer = null;


$(document).ready(function() {
  $("#start-button").click(function() {
    if (timer == null) {
      timer = setInterval("runTimer()", 100);
    }
    $("#stop-button").prop("disabled", false);
    $("#reset-button").prop("disabled", true);
    $(this).prop("disabled", true);
  });

  $("#stop-button").click(function() {
    clearInterval(timer);
    timer = null;
    $("#reset-button").prop("disabled", false);
    $("#start-button").prop("disabled", false);
  });

  $("#reset-button").click(function() {
    $("#time").text("0:0:0:0");
    timeComp = 0;
    $("#start-button").prop("disabled", false);
    $("#stop-button").prop("disabled", true);
    $(this).prop("disabled", true);
  });


});

function runTimer() {
  console.log(timeComp);
  timeComp += 1;
  var miliSec = timeComp % 10;
  var secSmall = Math.floor(timeComp / 10) % 10;
  var secLarge = Math.floor(timeComp / 100) % 60;
  var min = Math.floor(timeComp / 600) % 60;

  $("#time").text(min + ":" + secLarge + ":" + secSmall + ":" + miliSec);
}
