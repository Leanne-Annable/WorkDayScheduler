/* What I need to do:
 - Display the current day at the top of the calender when a user opens the planner.
        Link the moment code for this from the website, need to create a section in the html with a linked ID tag          ** done **
 - Present timeblocks for standard business hours when the user scrolls down.
        only show timescales that are available - 09:00-17:00           ** done **
 - Color-code each timeblock based on past, present, and future when the timeblock is viewed.
        grey for past, red current, green future.
        will need linking to the current time to be able to adjust for each time of use
 - Allow a user to enter an event when they click a timeblock
        add a text box or user entry section                        ** done **
 - Save the event in local storage when the save button is clicked in that timeblock.
        event listener to localStorage.setItem
 - Persist events between refreshes of a page
        events should stay in the document via local storage.
*/
// make sure the html and css load first
$(document).ready(function () {
       // shows the current date on screen
       var currentDay = moment().format("dddd, Do MMMM, YYYY")
       $("#currentDay").text(currentDay);

       // check the time now against the time slots to give the appropriate colour changes 
       function checkTime() {
              // get the current hour
              var currentHour = moment().hour();

              // check each time block and compare to current time
              // select each of the time block specifically
              $(".time-block").each(function () {
                     // take the number from the time block ID
                     // e.g. id=time9 => it selects the id, isolates the number by removing the word time, then turns the string number to an integer
                     var timeBlockHour = parseInt($(this).attr("id").split("time")[1]);
                     // console.log(timeBlockHour, currentHour)

                     // if statements to see if the time block is >, <, === current time
                     // need to add and remove all three of the classes present, past, future as required for re-useability
                     if (timeBlockHour > currentHour) {
                            $(this).removeClass("present");
                            $(this).removeClass("past");
                            $(this).addClass("future");
                     } else if (timeBlockHour < currentHour){
                            $(this).removeClass("present");
                            $(this).addClass("past");
                            $(this).removeClass("future");
                     } else {
                            $(this).addClass("present");
                            $(this).removeClass("past");
                            $(this).removeClass("future");
                     }
              })
       }
       checkTime()

       // pull any previously saved text content from the local storage.
       // need to reference each hour individually for each hour slot
       $("#time9 .description").val(localStorage.getItem("time9"));
       $("#time10 .description").val(localStorage.getItem("time10"));
       $("#time11 .description").val(localStorage.getItem("time11"));
       $("#time12 .description").val(localStorage.getItem("time12"));
       $("#time13 .description").val(localStorage.getItem("time13"));
       $("#time14 .description").val(localStorage.getItem("time14"));
       $("#time15 .description").val(localStorage.getItem("time15"));
       $("#time16 .description").val(localStorage.getItem("time16"));
       $("#time17 .description").val(localStorage.getItem("time17"));

       // create an event listener for the save button
       $(".saveBtn").on("click", function () {
              // console.log(this) // checking to see what was being selected
              // log the text input and the time slot selected to the localStorage 
              var text = $(this).siblings(".description").val(); // This is selecting the text area with a class of description, and isolating the value of what is inside
              var time = $(this).parent().attr("id"); // this is selecting the parents attribute id (e.g time9 for 9am)
              // send to local storage
              localStorage.setItem(time, text);
       });
})