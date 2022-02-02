import { useEffect, useState } from 'react';
import { csv, scaleBand, scaleLinear, max, DSVRowArray } from 'd3';

const BarChart = () => {
  const [data, setData] = useState<DSVRowArray>();

  const width = 960;
  const height = 500;
  const margin = {
    top: 20, right: 20, left: 20, bottom: 20
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

  var yScale = scaleBand()
		.domain(data.map(d => d.Country))
		.range([0, innerHeight]);

  var xScale = scaleLinear()
		.domain([0, max(data, (d: any) => d.Population)])
    .range([0, innerWidth]);

  return (
		<svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
				{data.map(item => <rect
            key={item.Index}
            x={0}
            y={yScale(item.Country)}
            width={xScale(item.Population) / 5}
            height={yScale.bandwidth()}
          />
          )}
      </g>
		</svg>
	);
}

export default BarChart;