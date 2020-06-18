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

    //