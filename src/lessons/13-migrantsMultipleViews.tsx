import useWorldMap from './13-components/useWorldMap';
import useFetch from './13-components/useFetch';
import MapView from './13-components/mapView';
import BarChart from './13-components/barChart';

const MigrantsMultipleViews = () => {
  const worldData = useWorldMap();
	const data = useFetch();

	if (!worldData || worldData === null || !data || data === null) {
		return <pre>Loading...</pre>;
	}

  const width = 1440;
  const height = 1440;

  return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg transform={`translate(-250,-350)`} width={width} height={height}>
				<MapView data={data} worldData={worldData} />
				<BarChart data={data} />
			</svg>
		</>
	);

};

export default MigrantsMultipleViews;
