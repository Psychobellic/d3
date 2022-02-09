import { useState, useEffect } from 'react';
import { csv } from 'd3';

const useCityData = () => {
	const [data, setData] = useState(null);
	
	const csvUrl =
		'https://gist.githubusercontent.com/Psychobellic/b28f619a110ae4e8627e6d34762ab56e/raw/World%2520Cities%2520DataSet';

	const row = (d: any) => {
		// unary plus operation to parse strings into numbers
		d.lat = +d.lat;
		d.lng = +d.lng;
		d.population = +d.population;

		return d;
	};

	useEffect(() => {
		csv(csvUrl, row)
			.then(setData)
			.catch((e) => console.log(e));
	}, []);

	return data;
};

export default useCityData;