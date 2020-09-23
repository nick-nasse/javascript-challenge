// from data.js
var tableData = data;

// Console.log the data from data.js
// console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");


// create dynamic html table
data.forEach((Ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(Ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });