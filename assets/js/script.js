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
    // create an event listener for the save button
    $(".saveBtn").on("click", function(){
        // console.log(this) checking to see what was being selected
        // log the text input and the time slot selected to the localStorage 
        var text = $(this).siblings(".description").val(); // This is selecting the text area with a class of description, and isolating the value of what is inside
        var time = $(this).parent().attr("id"); // this is selecting the parents attribute id (e.g time9 for 9am)
        // send to local storage
        localStorage.setItem(time, text);
    });

})