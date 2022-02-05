import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
	'https://gist.githubusercontent.com/Psychobellic/f2410a60233fc28cc67456dd1402ddb0/raw/week_temperature_sf.csv';

const useFetch = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const row = (d: any) => {
			d.temperature = +d.temperature;
			d.timestamp = new Date(d.timestamp);
			return d;
		};
		csv(csvUrl, row).then(setData);
	}, []);

	return data;
};
export default useFetch;