import { scaleSqrt, max, timeFormat, scaleTime, extent, bin, timeDays, sum, scaleLinear } from 'd3';
import { v4 as uuidv4 } from 'uuid';


export const Marks = ({ binnedData, xScale, yScale, innerHeight }) => {
  const xAxisTickFormat = timeFormat('%d/%m/%Y');

	return binnedData.map((d) => (
		<rect
			key={uuidv4()}
			className="mark"
			x={xScale(d.x0)}
			y={yScale(d.y)}
			width={xScale(d.x1) - xScale(d.x0)}
			height={innerHeight - yScale(d.y)}
			fill={'#c20101'}>
			<title>
				Incidents Between: 
				{' ' + xAxisTickFormat(d.x0) + ' and ' + xAxisTickFormat(d.x1)}, <br />
				Total Dead and Missing: {d.totalDeadAndMissing}.
			</title>
		</rect>
	));
  }

const BarChart = ({data}) => {

  const width = 800;
	const height = 250;
  const margin = {
		top: 10,
		right: 10,
		left: 10,
		bottom: 10,
	};

	const innerHeight = height - (margin.top + margin.bottom);
	const innerWidth = width - (margin.right + margin.left);

  const sizeValue = (d) => d['Total Number of Dead and Missing'];
	const maxRadius = 12;

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
		.map((array) => ({
			totalDeadAndMissing: sum(array, yValue), // used in Marks label on hover
			y: sum(array, yValue),
			x0: array.x0,
			x1: array.x1,
		}));
  
  const yScale = scaleLinear()
		.domain([0, max(binnedData, (d) => d.y)])
		.range([innerHeight, 0])
		.nice();


	const sizeScale = scaleSqrt()
		.domain([0, max(data, sizeValue)])
		.range([0, maxRadius]);

    return (
      <>
        <g transform={`translate(${margin.left * 47.5},${margin.top * 87.5})`}>
				  <Marks
					  binnedData={binnedData}
					  xScale={xScale}
					  yScale={yScale}
					  innerHeight={innerHeight}
				  />
			  </g>
      </>
    )
}

export default BarChart;