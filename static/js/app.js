// from data.js
var tableData = data;

// Console.log the data from data.js
// console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");


// create dynamic html table
// Build Table Function.
function tabular(generic) {
    tbody.html("");
    // Use d3 to update each cell's text with UFO Sigthings Data.
    generic.forEach(UFOSightings => {
        let row = tbody.append("tr");
        Object.values(UFOSightings).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

console.log(tableData)

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    dateInput = d3.select("#datetime").property("value");

    var filterData = tableData;
    var filterData = filterData.filter((row) => row.datetime === dateInput);

    tabular(filterData);
    console.log(filterData);
};

d3.selectAll("#filter-btn").on("click", runEnter);
d3.selectAll("#form").on("submit", runEnter);
tabular(tableData);