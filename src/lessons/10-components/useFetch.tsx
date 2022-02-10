import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
	'https://gist.githubusercontent.com/Psychobellic/359601fb9eff50be5b4c8ad9b1853487/raw/2022%2520Missing%2520Migrants%2520DataSet';

const useFetch = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const row = (d: any) => {
			d['Total Number of Dead and Missing'] =
				+d['Total Number of Dead and Missing'];
			d['Incident Date'] = new Date(d['Incident Date']);
			d.Region = d.Region;
			return d;
		};
		csv(csvUrl, row).then(setData);
	}, []);

	return data;
};
export default useFetch;