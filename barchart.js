import { select, csv, scaleLinear, scaleBand, max } from "d3";

const svg = d3.select("svg");

const width = +svg.attr("width");
const height = +svg.attr("height");
// domain - data space
// range - screen space
const render = data => {
  const xValue = d => d.population;
  const yValue = d => d.country;
  const xScale = scaleLinear().domain([0,max(data,xValue)]).range([0,width]);
  const yScale = scaleBand().domain(data.map(yValue)).range([0, height]);
  svg.selectAll('rect').data(data).enter()
  .append('rect')
  .attr('y', d => yScale(yValue(d)))
  .attr('width', d => xScale(xValue(d)))
  .attr('height', yScale.bandwidth())
};
csv("data.csv").then((data) =>
  data.forEach((d) => {
    d.population = +d.population * 1000;
  });
  render(data);
);
