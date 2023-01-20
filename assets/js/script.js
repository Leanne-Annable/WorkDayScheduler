/* What I need to do:
 - Display the current day at the top of the calender when a user opens the planner.
        Link the moment code for this from the website, need to create a section in the html with a linked ID tag
 - Present timeblocks for standard business hours when the user scrolls down.
        only show timescales that are available - shift start to shift end
 - Color-code each timeblock based on past, present, and future when the timeblock is viewed.
        grey for past, red current, green future.
        will need linking to the current time to be able to adjust for each time of use
 - Allow a user to enter an event when they click a timeblock
        add a text box or user entry section
 - Save the event in local storage when the save button is clicked in that timeblock.
        use JSON.stringify and JSON.parse?
 - Persist events between refreshes of a page
        events should stay in the document via local storage.
*/

var currentDay = moment().format("dddd, Do MMMM, YYYY")
$("#currentDay").text(currentDay);