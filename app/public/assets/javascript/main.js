console.log("hello world");

$("#submit").on("click", function(event) {
  event.preventDefault();
  var q1 = $("#q1").val();
  var q2 = $("#q2").val();
  var q3 = $("#q3").val();
  var q4 = $("#q4").val();
  var survey = {q1, q2, q3, q4};

  $.post("/api/survey", survey, function(data) {
    console.log(data);

  });
});