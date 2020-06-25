var currentDay = document.getElementById("currentDay")
var hoursPerDay = 24;
var time = [];
var futureTime= [];
var container = document.querySelector(".container")
currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");

function timeOneDay() {
    var formattedTime;
    for (i = 0; i < hoursPerDay + 1; i++) { 
        formattedTime = (moment().startOf("day").subtract(i, "hours")).format("ha");
        time.unshift(formattedTime);
        
    }
    for (var i = 8; i < time.length - 6; i++) {
        var textBlock = time[i];

        var newDiv = document.createElement("div")
        newDiv.textContent = textBlock;
        newDiv.setAttribute("class", "hour text-center col-2")


        var textarea = document.createElement("textarea");
        textarea.setAttribute("class", "future textarea hour col-8 ");

        var button = document.createElement("button");
        button.textContent = "Save";
        button.setAttribute("class","saveBtn i:hover col-2")
        
        
        container.appendChild(newDiv)
        container.appendChild(textarea)
        container.appendChild(button)

    };
}

timeOneDay();

