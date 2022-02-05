import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
// const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/land-50m.json';

const useFetch = () => {
	const [data, setData] = useState(null);

	useEffect(() => {	
		json(jsonUrl).then(setData);
	}, []);

	return data;
};
export default useFetch;