//business logic

//user interface logic
$(document).ready(function() {
  $("#new-to-do").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-item").val();
    $(".to-do-list").append("<li>" + userInput + "</li>");
    $(".results").show();
  });
});
