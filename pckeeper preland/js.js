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