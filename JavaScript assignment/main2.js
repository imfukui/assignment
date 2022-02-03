
function fresh(target) {
  let display = document.getElementById("display");
  let elementValue = target.innerHTML;
  if (elementValue == "AC") {
    display.innerHTML = 0;
  } else if (elementValue == "=") {
    display.innerHTML = eval(display.innerHTML);
  } else {
    if (display.innerHTML == "0" || display.innerHTML == "00") {
      display.innerHTML = elementValue;
    } else {
      display.innerHTML += elementValue;
    }
  }
}

$(document).ready(function() {
  $(".cha-btn").click(function() {
    $(".sign-btn").prop("disabled", false);
  });

  $(".reset-btn").click(function() {
    $(".sign-btn").prop("disabled", true);
    $(".dot-btn").prop("disabled", false);
  });

  $(".sign-btn").click(function() {
    $(".sign-btn").prop("disabled", true);
    $(".dot-btn").prop("disabled", false);
  });

  $(".dot-btn").click(function() {
    $(".dot-btn").prop("disabled", true);
  });
});