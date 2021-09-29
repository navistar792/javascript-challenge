// Assign the data from `data.js` to a descriptive variable
var sightings = data;

//select button
var button = d3.select("#filter-btn");

//select input box
var box = d3.select(".form-control");

// Create event handlers 
button.on("click", runEnter);
box.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    console.log("Button, input and event handlers working ok so far")
      // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightings);
};