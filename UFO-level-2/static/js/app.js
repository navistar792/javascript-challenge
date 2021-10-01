// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// be sure the tbody is empty on refresh
d3.selectAll("tbody > *").remove();

// populate the full table

sightings.forEach((ufoReport) => {
  var tbody = d3.select("tbody");
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

//select button
var button = d3.select("#filter-btn");

//select input box
var box = d3.select(".form-control");
var box1 = d3.select(".form-control1");

var reset = d3.select("#clearButton");

// Create event handlers 
// Use an event listener to assign the 'clear' function to the click event on the button
// window.onload = function() {
//   document.getElementById("clearButton").addEventListener("click",clear);
// };
button.on("click", runEnter);
box.on("submit",runEnter);
reset.on("click", clear)


// Complete the event handler function for the form
function runEnter() {

    
    console.log("Button, input and event handlers working ok so far")
      // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElement1 = d3.select("#city");
    var inputElement2 = d3.select("#state");
    var inputElement3 = d3.select("#country");
    var inputElement4 = d3.select("#shape");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");


filteredData = sightings.filter(dateSight => dateSight.datetime === inputValue);
 

    console.log(filteredData);
    
    // delete existing table?
    d3.selectAll("tbody > *").remove();  
    console.log(inputValue);
    console.log(sightings);

    // BONUS: Refactor to use Arrow Functions!
    filteredData.forEach((ufoReport) => {
      var tbody = d3.select("tbody");
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
    });

};



function refreshPage(){
  window.location.reload();
} 