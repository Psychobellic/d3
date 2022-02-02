import { useEffect, useState } from 'react';
import { csv, scaleBand, scaleLinear, max, DSVRowArray } from 'd3';

const BarChart = () => {
  const [data, setData] = useState<DSVRowArray>();

  const width = 960;
  const height = 500;
  const margin = {
    top: 25, right: -75, left: 175, bottom: 25
  }
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  useEffect(() => {
    const csvUrl =
      'https://gist.githubusercontent.com/Psychobellic/5ce889f0e43d5cb46bd5f3695f2177bc/raw/UN_Population_2019.csv';
    csv(csvUrl)
			.then(d => {
        setData(d.slice(0, 10));
      })
			.catch((e) => console.log(e));
  }, []);

  if(!data){
    return <pre>Loading...</pre>;
  }

  console.log(data);

  const yScale = scaleBand()
		.domain(data.map((d: any) => d.Country))
		.range([0, innerHeight]);

  const xScale = scaleLinear()
		.domain([0, max(data, (d: any) => d.Population)])
    .range([0, innerWidth - margin.left - margin.right]);

  console.log(xScale.ticks())

  return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				{
					xScale.ticks().map((tickValue) => (
						<g
							key={tickValue}
							transform={`translate(${xScale(tickValue / 45)}, 0)`}>
							<line
								x1={xScale(tickValue)}
								x2={xScale(tickValue)}
								y1={0}
								y2={innerHeight}
								stroke="black"
							/>
							<text
								key={tickValue}
								y={innerHeight + 20}
								x={xScale(tickValue)}
								style={{ fontSize: '0.75rem' }}
								dx="-.5rem">
								{tickValue}
							</text>
						</g>
					)) /* add lines and labels to X Axis */
				}

				{
					yScale.domain().map((tickValue) => (
						<text
              key={tickValue}
							style={{ textAnchor: 'end' }}
							dx="-10px"
							transform={`translate(0, ${
								yScale(tickValue) + yScale.bandwidth() / 2 + 5
							})`}>
							{tickValue}
						</text>
					)) /* add labels to Y Axis */
				}

				{
					data.map((item: any) => (
						<rect
							key={item.Country}
							x={0}
							y={yScale(item.Country)}
							width={xScale(item.Population)}
							height={yScale.bandwidth()}
						/>
					)) /* plot data to graph */
				}
			</g>
		</svg>
	);
}

export default BarChart;