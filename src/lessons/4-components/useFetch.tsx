import React, { useState, useEffect } from 'react';
import { csv, DSVRowArray } from 'd3';

const useFetch = () => {
  const [data, setData] = useState<DSVRowArray>();

  useEffect(() => {
		const csvUrl =
			'https://gist.githubusercontent.com/Psychobellic/5ce889f0e43d5cb46bd5f3695f2177bc/raw/UN_Population_2019.csv';
		csv(csvUrl)
			.then((d) => {
				setData(d.slice(0, 10));
			})
			.catch((e) => console.log(e));
	}, []);

  return data;
}

export default useFetch;