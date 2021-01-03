let climate_daly_data = [
  {orient: "left", name: "1956", x: 368, y: 238},
  {orient: "right", name: "1957", x: 372, y: 240},
  {orient: "bottom", name: "1958", x: 377, y: 225},
  {orient: "top", name: "1959", x: 391, y: 230},
  {orient: "right", name: "1960", x: 394, y: 226},
  {orient: "bottom", name: "1961", x: 398, y: 225},
  {orient: "right", name: "1962", x: 408, y: 221},
  {orient: "bottom", name: "1963", x: 423, y: 212},
  {orient: "bottom", name: "1964", x: 438, y: 210},
  {orient: "bottom", name: "1965", x: 454, y: 213},
  {orient: "top", name: "1966", x: 468, y: 214},
  {orient: "bottom", name: "1967", x: 483, y: 240},
  {orient: "right", name: "1968", x: 504, y: 212},
  {orient: "right", name: "1969", x: 521, y: 207},
  {orient: "right", name: "1970", x: 538, y: 201},
  {orient: "bottom", name: "1971", x: 565, y: 193},
  {orient: "bottom", name: "1972", x: 597, y: 187},
  {orient: "right", name: "1973", x: 616, y: 190},
  {orient: "left", name: "1974", x: 594, y: 234},
  {orient: "bottom", name: "1975", x: 611, y: 230},
];


let toggleClass = (i,toggle) => {
d3.select("#viz div:nth-child("+ i +")").classed("highlightBar",toggle);
d3.select("#legend li:nth-child("+ i +")").classed("highlightText",toggle);
};

let divSelection = d3.select("#viz") 
.selectAll("div");

divSelection
.data(climate_daly_data)
.enter()
.append("div")
.attr("class", "bar")
.style("position", 'absolute')
.style("top", function(d) { return d.x * 8 + "px"; 
return console.log(d.y); })
.style("left", function(d) { return d.y * 8 + "px"; })
.on("mouseover", function(d,i) { toggleClass (i+1, true) } )
.on("mouseout", function(d,i) { toggleClass (i+1, false) } );

var data = [5, 10, 12];
var width = 900,
scaleFactor = 10,
 barHeight = 20;

var graph = d3.select("body")
    .append("svg")
       .attr("width", width)
       .attr("height", 1000);

var bar = graph.selectAll("g")
     .data(climate_daly_data)
       .enter()
       .append("g")
       .attr("transform", function(d, i) {
       return "translate(" + d.x + "," + d.y + ")";});

    bar.append("rect")
       .attr("width", 20)
       .attr("height",20);

    bar.append("text")
       .attr("x", function(d) { return (d.y*scaleFactor); })
       .attr("y", barHeight / 2)
       .attr("dy", ".35em")
       .text(function(d) { return d; });
      



let listSelection = d3.select("#legend") 
.selectAll("li");


listSelection
.data(climate_daly_data)
.enter()
.append("li")
.text(function(d) { 
   return d.region + ": " + d.deaths + " views";
  })
.on("mouseover", function(d,i) { toggleClass (i+1, true) } )
.on("mouseout", function(d,i) { toggleClass (i+1, false) } );


