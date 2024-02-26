if ( $('#test')[0].type != 'date' ) $('#test').datepicker();

$(document).ready(function() {
    $("#calendar").datepicker({
      beforeShowDay: function(date) {
        var availableDates = ["2024-02-29", "2024-03-01", "2024-03-05"]; 
        var string = $.datepicker.formatDate('yy-mm-dd', date);
        return [availableDates.indexOf(string) != -1];
      }
    });
    $("#submit-btn").click(function() {
      var date = $("#calendar").val();
      var people = $("#people").val();
      var comments = $("#comments").val();

      if (date && people) {
        alert("Booking confirmed!\nDate: " + date + "\nNumber of People: " + people + "\nComments: " + comments);
      } else {
        alert("Please select a date and enter the number of people.");
      }
    });
  });

// this code comes from stackoverflow user costas mav
// https://jsfiddle.net/2AaFk/1/
