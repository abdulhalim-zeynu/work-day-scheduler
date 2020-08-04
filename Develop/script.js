// current date and time
$(document).ready(function () {
    var now = moment();
    console.log(now);
    console.log($("#currentDay"));
    $("#currentDay").text(now);
});


