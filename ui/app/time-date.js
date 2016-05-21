// DATE FORMAT FUNCTION
$(function() {
  var date_format = 'E<br />MMM D';
  $(".date").each(function (idx, elem) {
      var d = new Date(Date.parse($(this).text()));
      $(this).replaceWith($.format.date(d, date_format));
  });
});

// START TIME FORMATING FUNTION
$(function() {
  function parse_start(time) {

      var hours = time[0] + time[1];
      var min = time[2] + time[3];

      // NOON HANDLING
      if (min != "00") {
        min = ':' + min;
      } else {
        min =  '';
      }

      if (hours < 12) {
          return hours;
      } else {
          hours=hours - 12;
          hours=(hours.length < 10) ? '0'+hours:hours;
          if (hours === 0) {
            hours = '12';
          }
          return hours;
      }
  }
  $(".time-start").each(function (idx, elem) {
    var n = $(this).text();
    var n1 =n.split(':');
    var time = parse_start(n1[0]+n1[1]);
    $(this).replaceWith(time);
  });
});

// END TIME FORMATING FUNTION
  $(function() {

  function parse_end(time) {

      var hours = time[0] + time[1];
      var min = time[2] + time[3];

      // NOON HANDLING
      if (min != "00") {
        min = ':' + min;
      } else {
        min =  '';
      }

      // ERROR HANDLING
      if (hours === 'NaN' || hours === 'un') {
        hours = ' ';
        min = ' ';
        return;
      };

      // OUTPUTS
      if (hours < 12) {
          return hours + min + 'am';
      } else {
          hours=hours - 12;
          hours=(hours.length < 10) ? '0'+hours:hours;

          if (hours === 0) {
            hours = '12';
          }
          return hours + min + 'pm';
      }
  }

  // FUNCTION CALL
  $(".time-end").each(function (idx, elem) {
    var n = $(this).text();
    var n1 =n.split(':');
    var time = parse_end(n1[0]+n1[1]);
    $(this).replaceWith(time);
  });
});
