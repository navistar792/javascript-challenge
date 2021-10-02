// Assign the data from `data.js` to a descriptive variable
var sightings2 = data;

function checkIt(data) {
  console.log("Checking It!")
  //var dispatch = d3.dispatch("load", "statechange");
  //Get Countries
  var countriesByName = d3.nest()
    .key(function(d) {
      return d.state;
    })
    .entries(data);
  //console.log(countriesByName)
  var data = JSON.stringify(countriesByName)
  //console.log(data);
  var data = JSON.parse(data);
  //console.log(data);


  function mydropDown(data) {
    //console.log(data);
    var country = [];
    for (var i in data) {
      country.push(data[i].key);
    };
    //console.log(country);

    var dropDown = d3.select("#dropdown_container")
      .append("select")
      .attr("class", "selection")
      .attr("name", "country-list");
    var options = dropDown.selectAll("option")
      .data(data)
      .enter()
      .append("option");
    options.text(function(d) {
        return d.key;
      })
      .attr("value", function(d) {
        return d.values;
      });
  }


  mydropDown(data);
};

//https://github.com/d3/d3-3.x-api-reference/blob/master/Requests.md#d3_json
console.log("D3 Version: " + d3.version);

d3.json("https://gist.githubusercontent.com/heenaI/cbbc5c5f49994f174376/raw/82cd19eff7db367193cf8ce00144a40ea8d140ac/data.json", checkIt);