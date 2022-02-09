import useWorldMap from './9-components/useWorldMap';
import useCityData from './9-components/useCityData';
import Marks from './9-components/Marks';

const WorldCitiesMap = () => {
  const worldData = useWorldMap();
	const cityData = useCityData();

  if (!worldData || worldData === null || !cityData || cityData === null) {
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
				<Marks worldData={worldData} cityData={cityData} />
			</svg>
		</>
	);
};

export default WorldCitiesMap;