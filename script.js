// Time and Date
let now = moment().format("dddd, MMMM Do, YYYY, hh:mm:ss A");
$("#CurrentDate").append(now);

// Time Blocks
for (let i = 5; i <= 22; i++) {
    let time = moment(i, "HH:mm").format("h:mm a");
    
    let classColor;
    let value;
  
    if (localStorage.getItem(moment(i, "HH:mm").format("h:mm"))) {
      value = localStorage.getItem(moment(i, "HH:mm").format("h:mm"));
    } else {
      value = "";
    }

// Time table
$("#planner-table").append(`
    <div class="row">
        <div class="hour 18 col">${time}</div>
        <textarea id = ${time} class="textarea col ${classColor}">${value}</textarea>
        <button class="saveBtn col"><i class="far fa-save"></i></button>
     </div>
    `);
}

$(document).on("click", ".saveBtn", function () {
  let id = $(this).prev().attr("id");
  let task = $(this).prev().val();

  localStorage.setItem(id, task);
});
}

