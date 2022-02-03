import { scaleBand, scaleLinear, max } from 'd3';
import useFetch from './4-components/useFetch';
import XAxis from './4-components/XAxis';
import YAxis from './4-components/YAxis';
import Marks from './4-components/marks';

const BarChart = () => {

  const width = 960;
  const height = 500;
  const margin = {
    top: 25, right: -75, left: 175, bottom: 25
  }
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

	const data = useFetch();
	

	if (!data) {
		return <pre>Loading...</pre>;
	}

  console.log(data);

	
  const xScale = scaleLinear()
		.domain([0, max(data, (d: any) => d.Population)])
		.range([0, innerWidth - margin.left - margin.right]);

  const yScale = scaleBand()
		.domain(data.map((d: any) => d.Country))
		.range([0, innerHeight]);

  return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<XAxis
					data={data}
					xScale={xScale}
				/>
				<YAxis yScale={yScale} />
				<Marks yScale={yScale} xScale={xScale} data={data} />
			</g>
		</svg>
	);
}

export default BarChart;