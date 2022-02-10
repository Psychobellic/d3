import { scaleLinear, scaleTime, extent, timeFormat } from 'd3';
import useFetch from './10-components/useFetch';
import Marks from './10-components/Marks';
import XAxis from './10-components/YAxis';
import YAxis from './10-components/XAxis';
import { Label } from '../styles';

const MissingMigrants = () => {
	const data = useFetch();

	if (!data) {
		return <pre>Loading...</pre>;
	}

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

	const xValue = (d: any) => d['Incident Date'];
	const yValue = (d: any) => d['Total Number of Dead and Missing'];

	const xAxisTickFormat = timeFormat('%d/%m/%Y');

	const xScale = scaleTime()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
		.nice();

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([innerHeight, 0])

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg width={width * 1.3} height={height * 1.25}>
				<g transform={`translate(${margin.left * 25}, ${margin.top * 5})`}>
					<XAxis xScale={xScale} innerHeight={innerHeight} xValue={xValue} />
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-450,150) rotate(-90) `}>
						Total Dead and Missing Migrants
					</Label>
					<YAxis
						yScale={yScale}
						innerWidth={innerWidth}
						yValue={yValue}
					/>
					<Label x={innerWidth / 2} y={innerHeight + 100} textAnchor="middle">
						Time
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						data={data}
						yValue={yValue}
						xValue={xValue}
						circleRadius={4}
						tickFormat={xAxisTickFormat}
					/>
				</g>
			</svg>
		</>
	);
};

export default MissingMigrants;
