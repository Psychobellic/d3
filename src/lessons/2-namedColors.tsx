import React, { useState, useCallback } from 'react';
import { Svg } from '../styles';

const height = 500;
const width = 960;
const circleRadius = 10;
const initialMousePosition = { x: width / 2, y: height / 2 };

const NamedColors = () => {
  const [ data, setData ] = useState('');
  const [ mousePosition, setMousePosition ] = useState(initialMousePosition);
  const handleMouseMove = useCallback((event): any => {
		const { clientX, clientY } = event;
		setMousePosition({ x: clientX, y: clientY });
	}, [setMousePosition]);

  const csvUrl =
		'https://gist.githubusercontent.com/Psychobellic/992f13930c988f1ff3878507a9cee398/raw/cssNamedColors.csv';

  const fetchText = async (url: string) => {
    const response = await fetch(url);
    return await response.text();
  }

  fetchText(csvUrl).then((text) => setData(
    text
  ));


  return <div> 
    <Svg width={width} height={height} onMouseMove={handleMouseMove}>
			<circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
		</Svg>
    <p>{data}</p>
  </div>
};

export default NamedColors;
