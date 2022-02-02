import { csv, arc, pie, DSVRowArray } from 'd3';
import React, { useState, useEffect } from 'react';
import { PieChartSvg, G } from '../styles';

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

  let width = window.innerWidth - 15;
  let height = window.innerHeight - 20;
  let centerX = width / 2;
  let centerY = height / 2;

  const dataArc = arc()
    .innerRadius(0)
    .outerRadius(width)

  const pieChart = pie().value(1);

  return (
		<PieChartSvg width={width} height={height}>
			<g transform={`translate(${centerX}, ${centerY})`}>
				{pieChart(data).map((item, index) => {
					{
						return <path
								key={index}
								fill={item.data['RGB Hex Value']}
								d={dataArc(item)}
							/>
					}
				})}
			</g>
		</PieChartSvg>
	);

};

export default PieChart;
