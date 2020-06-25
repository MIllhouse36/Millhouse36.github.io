
* simple cldr app allows user to save events for each hour of the day
* add important events to cldr app

    **//!WHEN I open the planner
    **//!THEN the current day is displayed at the top of the calendar:
    **//! display current DAY at the top of calendar
            (day, month, date)
    **//! WHEN I scroll down
    **//!THEN I am presented with timeblocks for standard business hours:
    **//! separate hours of day into array
    **//! set timeblocks for each hour in the day:
    for (var i=0; i<time)
    **//! set timeblocks between an interval of time (e.g, 8am-6pm)
    make blocks responsive but scrollable
    **//!WHEN click timeblock
    **//!THEN I can enter an event:

    eh WHEN I view the timeblocks for that day
    THEN each timeblock is color coded:

    ? set up event to change timeblocks states from future events, current events, and passed events. ? make time the event to listen for?

     WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage:
    ? make save button event that saves test input
- WHEN I refresh the page
THEN the saved events persist:
    ? make it so that user inputs are stored even after page refresh


create body cards that can be clicked on and user can add text
that is appended to body card containing class styling button

How to make past, present, and future hours color coded:
set attri so:
var dayNHours = moment.js value for start of current day to end of current day in hours
for (var i=0; i<hours.length, i++) reads hour value appends hour timestamp to corresponding html textblocks

timeblocks start with future class 
if timeblock value === current time timeblock("class"=== present)
if hour in day has past timeblock aquires "past" class
Make click event to prompt viewer to set an event
Make save button that saves user input to local storage on click 


// var hrsPassed = moment().startOf("day").fromNow();  
// var dayStart = moment().startOf("day").format("hh:mma");
// var dayEnd = moment().endOf("day").format("hh:mma");

//console.log("Today started at "+ dayStart + ", " + hrsPassed + ". It will end at " + dayEnd)
//console.log(a);
//console.log(d)

