//business logic

//user interface logic
$(document).ready(function() {
  $("#new-to-do").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-item").val();
    $(".to-do-list").append("<li class='task'>" + userInput + "</li>");
    
    $(".task").click(function(event) {
      event.preventDefault();

      $(this).addClass("done");
    });

    $(".results").show();
  });

  $("#checkables").submit(function(event) {
    event.preventDefault();

    $(".done").hide();
  });
});
