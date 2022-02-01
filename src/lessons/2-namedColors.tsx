import { csv, csvFormat, DSVRowArray } from 'd3';
import React, { useState, useEffect } from 'react';
import { P } from '../styles';

const NamedColors = () => {
  const [data, setData] = useState<DSVRowArray>();
  const [tableSize, setTableSize] = useState(0);

	useEffect(() => {
		const csvUrl =
			'https://gist.githubusercontent.com/Psychobellic/992f13930c988f1ff3878507a9cee398/raw/cssNamedColors.csv';

		csv(csvUrl)
			.then((data) => {
				setData(data);
				setTableSize(parseFloat((csvFormat(data).length / 1024).toFixed(1)));
			})
			.catch((e) => console.log(e));
	}, []);	

	const length = data?.length;
  
  return (
		<>
			<P>
				{data ? (
					<P>
						{tableSize + ' kB.'} <br />
						{data?.columns.length + ' columns.'} <br />
						{length + ' rows.'} <br />
					</P>
				) : (
					'Loading...'
				)}
			</P>
		</>
	);
};

export default NamedColors;
