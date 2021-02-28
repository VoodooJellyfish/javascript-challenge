// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#filters");
var tbody = d3.select("tbody");

// console.log(button)
// console.log(form)
// //Building the Table
// data.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    
    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);
    
    console.log(filteredData);
    console.log(tableData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

