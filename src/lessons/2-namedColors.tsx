import { csv, csvFormat, DSVRowArray } from 'd3';
import React, { useState, useEffect } from 'react';
import { Content, Footer, Wrapper } from '../styles';

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

	if(!data){
		return <pre>Loading...</pre>;
	}

  console.log(data);

	return (
		<Wrapper>
			<Content>
				{data.map((item, index) => {
					{
						console.log(item);
						return (
							<>
								<div
									key={index}
									style={{
										backgroundColor: item['RGB Hex Value'],
										width: '100vw',
										height: '5px',
									}}
								/>
							</>
						);
					}
				})}
			</Content>
			<Footer>
				data size: { tableSize + ' kB.  ' +	data?.columns.length + ' columns.  ' + length + ' rows.' }
			</Footer>
		</Wrapper>
	)
};

export default NamedColors;
