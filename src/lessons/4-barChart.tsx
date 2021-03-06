import { scaleBand, scaleLinear, max } from 'd3';
import useFetch from './4-components/useFetch';
import XAxis from './4-components/XAxis';
import YAxis from './4-components/YAxis';
import Marks from './4-components/Marks';

import {Label} from '../styles'

const BarChart = () => {

  const width = 1300;
  const height = 900;
  const margin = {
    top: 10, right: 10, left: 10, bottom: 10
  }
  const innerHeight = height - (margin.top + margin.bottom);
  const innerWidth = width - (margin.right + margin.left);

	const data = useFetch();
	
	if (!data) {
		return <pre>Loading...</pre>;
	}

	const xValue = (d: any) => d.Population
	const yValue = (d: any) => d.Country;

  const xScale = scaleLinear()
		.domain([0, max(data, xValue) * 5])
		.range([0, innerWidth]);

  const yScale = scaleBand()
		.domain(data.map(yValue))
		.range([0, innerHeight])
		.paddingInner(.15);

  return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg width={width * 5} height={height * 1.5}>
				<g transform={`translate(${margin.left * 20}, ${margin.top * 10})`}>
					<XAxis xScale={xScale} innerHeight={innerHeight} />
					<YAxis yScale={yScale} />
					<Label x={innerWidth / 2} y={innerHeight + 50} textAnchor="middle">
						Population
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						data={data}
						yValue={yValue}
						xValue={xValue}
					/>
				</g>
			</svg>
		</>
	);
}

export default BarChart;