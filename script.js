// Time and Date
let date = moment().format("dddd, MMMM Do");
$("#currentDay").html(date);

// Time Blocks
for (let i = 5; i <= 23; i++) {
  let time = moment(i, "HH:mm").format("h:mm a");

  let classColor;
  let value;

  if (localStorage.getItem(moment(i, "HH:mm").format("h:mm"))) {
    value = localStorage.getItem(moment(i, "HH:mm").format("h:mm"));
  } else {
    value = "";
  }

  // Time table
  if (i < moment().hour()) {
    classColor = "expired";

    //if current color code is yello
  } else if (i === moment().hour()) {
    classColor = "current";

    //if later than the current hour make
  } else {
    classColor = "future";
  }

  //append new rows to the planner-table
  $("#planner-table").append(`
    <div class="row">
        <div class="hour 9 col">${time}</div>
        <textarea id = ${time} class="textarea col ${classColor}">${value}</textarea>
        <button class="saveBtn col"><i class="far fa-save"></i></button>
     </div>
    `);
}

//Click save to local storage
$(document).on("click", ".saveBtn", function () {
  let id = $(this).prev().attr("id");
  let task = $(this).prev().val();

  localStorage.setItem(id, task);
});
