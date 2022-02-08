import { useState, useEffect } from 'react';
import { csv, DSVRowArray } from 'd3';

const useFetch = () => {
  const [data, setData] = useState<DSVRowArray>();

  useEffect(() => {
		const csvUrl =
			'https://gist.githubusercontent.com/Psychobellic/b6e4c1f7a902e40aea322eb4f20270d1/raw/iris.csv';
			const row = d => {
				(d.sepal_length = +d.sepal_length),
					(d.sepal_width = +d.sepal_width),
					(d.petal_length = +d.petal_length),
					(d.petal_width = +d.petal_width),
					d.species;
				return d;
			}
		csv(csvUrl)
			.then(setData)
			.catch((e) => console.log(e));
	}, []);

  return data;
}

export default useFetch;