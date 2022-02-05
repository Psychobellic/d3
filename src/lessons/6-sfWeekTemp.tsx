import { scaleLinear, scaleTime, extent, timeFormat } from 'd3';
import useFetch from './6-components/useFetch';
import Marks from './6-components/Marks';
import XAxis from './6-components/XAxis';
import YAxis from './6-components/YAxis';
import { Label } from '../styles';

const LineChart = () => {
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

	const xValue = (d: any) => d.timestamp;
	const yValue = (d: any) => d.temperature;

	const formatTime = timeFormat('%a');

	const xScale = scaleTime()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
		.nice()

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([innerHeight, 0])
		.nice()

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
					<XAxis xScale={xScale} innerHeight={innerHeight} formatTime={formatTime} />
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-450,150) rotate(-90) `}>
						Time
					</Label>
					<YAxis
						yScale={yScale}
						innerWidth={innerWidth}
						formatTime={formatTime}
					/>
					<Label x={innerWidth / 2} y={innerHeight + 100} textAnchor="middle">
						Temperature
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						data={data}
						yValue={yValue}
						xValue={xValue}
						circleRadius={3}
					/>
				</g>
			</svg>
		</>
	);
};

export default LineChart;