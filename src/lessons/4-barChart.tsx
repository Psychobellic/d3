import { useEffect, useState } from 'react';
import { csv, scaleBand, scaleLinear, max, DSVRowArray } from 'd3';

const BarChart = () => {
  const [data, setData] = useState<DSVRowArray>();

  let width = 960;
  let height = 500;

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
		.range([0, height]);

  var xScale = scaleLinear()
		.domain([0, max(data, (d: any) => d.Population)])
    .range([0, width]);

  return (
		<svg width={width} height={height}>
				{data.map(item => <rect
            key={item.Index}
            x={0}
            y={yScale(item.Country)}
            width={xScale(item.Population) / 5}
            height={yScale.bandwidth()}
          />
          )}
		</svg>
	);
}

export default BarChart;