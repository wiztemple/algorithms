console.log(d3);
const svg = d3.select("svg");
// svg.style("background-color", "red");
const width = +svg.attr("width");
const height = +svg.attr("height");

const circle = svg
  .append("circle")
  .attr("r", height / 2)
  .attr("cx", width / 2)
  .attr("cy", height / 2);
