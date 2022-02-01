import { csv, csvFormat, DSVRowArray } from 'd3';
import React, { useState, useCallback, useEffect } from 'react';
import { Svg } from '../styles';

const height = 500;
const width = 960;
const circleRadius = 10;
const initialMousePosition = { x: width / 2, y: height / 2 };

const NamedColors = () => {
  const [data, setData] = useState<DSVRowArray>();
  const [ mousePosition, setMousePosition ] = useState(initialMousePosition);
  const handleMouseMove = useCallback((event): any => {
		const { clientX, clientY } = event;
		setMousePosition({ x: clientX, y: clientY });
	}, [setMousePosition]);
  const [tableSize, setTableSize] = useState(0);

  const csvUrl =
		'https://gist.githubusercontent.com/Psychobellic/992f13930c988f1ff3878507a9cee398/raw/cssNamedColors.csv';

  csv(csvUrl).then(data => {
		setData(data);
		setTableSize(parseFloat((csvFormat(data).length / 1024).toFixed(1))); // amount of characters / size of each character = tableSize in kB
	}).catch(e => console.log(e));

	const length = data?.length; // amount of rows in data

  return (
		<div>
			<Svg width={width} height={height} onMouseMove={handleMouseMove}>
				<circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
			</Svg>
			<table>
				<thead>
					<tr>
						<th>{ length + ' rows' }</th>
						<th>{ data?.columns.length + ' columns' }</th>
            <th>{ tableSize + ' kB' }</th>
					</tr>
					<tr>
						<th>{data?.columns[0]}</th>
						<th>{data?.columns[1]}</th>
						<th>{data?.columns[2]}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default NamedColors;
