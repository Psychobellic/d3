import { csv, arc, DSVRowArray } from 'd3';
import React, { useState, useEffect } from 'react';

const PieChart = () => {
	const [data, setData] = useState<DSVRowArray>();

	useEffect(() => {
		const csvUrl =
			'https://gist.githubusercontent.com/Psychobellic/992f13930c988f1ff3878507a9cee398/raw/cssNamedColors.csv';

		csv(csvUrl)
			.then((data) => {
				setData(data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!data) {
		return <pre>Loading...</pre>;
	}

  let width = window.innerWidth;
  let height = window.innerHeight;
  let centerX = width / 2;
  let centerY = height / 2;

  const dataArc = arc()

  return (
		<svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {data.map((item, index) => {
          {
            console.log(item);
            return (
							<path
								key={index}
								fill={item['RGB Hex Value']}
								d={dataArc({
									innerRadius: 0,
									outerRadius: width,
									startAngle: (index / data.length) * 2 * Math.PI,
									endAngle: ((index + 1) / data.length) * 2 * Math.PI,
								})}
							/>
						);
          }
        })}
      </g>
		</svg>
	);

};

export default PieChart;
