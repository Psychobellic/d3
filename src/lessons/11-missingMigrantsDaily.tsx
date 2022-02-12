import { scaleLinear, scaleTime, extent, timeFormat, bin, timeDays, sum, max } from 'd3';
import useFetch from './11-components/useFetch';
import Marks from './11-components/Marks';
import XAxis from './11-components/XAxis';
import YAxis from './11-components/YAxis';
import { Label } from '../styles';

const MissingMigrantsDaily = () => {
	const data = useFetch();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const xAxisTickFormat = timeFormat('%d/%m/%Y');
	
	const width = 800;
	const height = 500;
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
	
	const xScale = scaleTime()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
		.nice();

	const [start, stop] = xScale.domain();

	const binnedData = bin()
		.value(xValue)
		.domain(xScale.domain())
		.thresholds(timeDays(start, stop))(data)
		.map(array => ({
			totalDeadAndMissing: sum(array, yValue),
			y: sum(array, yValue),
			x0: array.x0,
			x1: array.x1,
		}))

	const yScale = scaleLinear()
		.domain([0, max(binnedData, d => d.y)])
		.range([innerHeight, 0])
		.nice();

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg width={width * 1.3} height={height * 1.25}>
				<g transform={`translate(${margin.left * 15}, ${margin.top * 5})`}>
					<XAxis xScale={xScale} innerHeight={innerHeight} xValue={xValue} tickFormat={xAxisTickFormat}/>
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-325,110) rotate(-90) `}>
						Total Dead and Missing Migrants
					</Label>
					<YAxis
						yScale={yScale}
						innerWidth={innerWidth}
						yValue={yValue}
						tickFormat={xAxisTickFormat}
					/>
					<Label x={innerWidth / 2} y={innerHeight + 75} textAnchor="middle">
						Time
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						binnedData={binnedData}
						innerHeight={innerHeight}
						tickFormat={xAxisTickFormat}
					/>
				</g>
			</svg>
		</>
	);
};

export default MissingMigrantsDaily;
