import { scaleLinear, extent } from 'd3';
import useFetch from './5-components/useFetch';
import Marks from './5-components/Marks';
import XAxis from './5-components/XAxis';
import YAxis from './5-components/YAxis';

import { Label } from '../styles';

const ScatterPlot = () => {
	const width = 960;
	const height = 650;
	const margin = {
		top: 10,
		right: 10,
		left: 10,
		bottom: 10,
	};
	const innerHeight = height - (margin.top + margin.bottom);
	const innerWidth = width - (margin.right + margin.left);

	const data = useFetch();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const xValue = (d: any) => d.sepal_length;
	const yValue = (d: any) => d.sepal_width;

	const xScale = scaleLinear()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
    .nice()

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([0, innerHeight])

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg width={width * 1.3} height={height * 1.25}>
				<g transform={`translate(${margin.left * 25}, ${margin.top * 5})`}>
					<XAxis xScale={xScale} innerHeight={innerHeight} />
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-450,150) rotate(-90) `}>
						Sepal Width
					</Label>
					<YAxis yScale={yScale} innerWidth={innerWidth} />
					<Label x={innerWidth / 2} y={innerHeight + 100} textAnchor="middle">
						Sepal Length
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						data={data}
						yValue={yValue}
						xValue={xValue}
						circleRadius={9}
					/>
				</g>
			</svg>
		</>
	);
};

export default ScatterPlot;
