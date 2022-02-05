import useFetch from "./7-components/useFetch";
import Marks from './7-components/Marks';

const WorldMap = () => {

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

  return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<svg width={width * 1.5} height={height * 1.75} transform={`translate(-${height / 2}, -${width / 2.5})`}>
				<Marks data={data} />
			</svg>
		</>
	);
}

export default WorldMap;