//business logic
function Todo (task, description, deadline) {
  this.todo = task;
  this.descrip = description;
  this.deadline = deadline;
}

//user interface logic
$(document).ready(function() {
  $("#new-to-do").submit(function(event) {
    event.preventDefault();

    var todo = $("input#new-item").val();
    var descrip = $("input#new-descrip").val();
    var deadline = $("input#new-deadline").val();
    var newTodo = new Todo (todo, descrip, deadline);

    $(".to-do-list").append("<li class='task'>" + todo + "</li>");

    $(".task").click(function(event) {
      event.preventDefault();

      $(this).addClass("done");
    });

    $(".task").last().hover(function(event) {
      event.preventDefault();

      $("#details").toggle();
      $("h4").text(newTodo.todo);
      $(".descrip").text(newTodo.descrip);
      $(".deadline").text(newTodo.deadline);

    });
    $(".results").show();

  });

  $("#checkables").submit(function(event) {
    event.preventDefault();

    $(".done").hide();
  });
});
