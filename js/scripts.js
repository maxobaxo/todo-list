//business logic

//user interface logic
$(document).ready(function() {
  $("#new-to-do").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-item").val();
    $(".to-do-list").append("<input type='checkbox'>" + userInput + "<br>");
    $(".results").show();
  });
});
