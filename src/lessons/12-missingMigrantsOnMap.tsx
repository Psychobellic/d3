import useWorldMap from './12-components/useWorldMap';
import useFetch from './12-components/useFetch';
import Marks from './12-components/Marks';
import { scaleSqrt, max } from 'd3';

const MissingMigrantsOnMap = () => {
	const worldData = useWorldMap();
	const data = useFetch();

	if (!worldData || worldData === null || !data || data === null) {
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

	const sizeValue = (d) => d['Total Number of Dead and Missing'];
	const maxRadius = 12;

	const sizeScale = scaleSqrt()
		.domain([0, max(data, sizeValue)])
		.range([0, maxRadius]);

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg
				width={width * 1.5}
				height={height * 1.75}
				transform={`translate(-${height / 2}, -${width / 2.5})`}>
				<Marks
					worldData={worldData}
					data={data}
					sizeValue={sizeValue}
					sizeScale={sizeScale}
				/>
			</svg>
		</>
	);
};

export default MissingMigrantsOnMap;
