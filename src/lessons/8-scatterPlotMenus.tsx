import { useState } from "react";
import { scaleLinear, extent } from 'd3';

import useFetch from "./8-components/useFetch";
import Dropdown from "./8-components/Dropdown";
import Marks from './8-components/Marks';
import XAxis from './8-components/XAxis';
import YAxis from './8-components/YAxis';

import { Label, DropdownLabel } from '../styles';

const ScatterPlotMenus = () => {
  const [selectedX, setSelectedX] = useState('sepal_length');
  const [selectedY, setSelectedY] = useState('sepal_width');

  const options = [
		{ name: 'sepal_length', label: 'Sepal Length' },
		{ name: 'sepal_width', label: 'Sepal Width' },
		{ name: 'petal_length', label: 'Petal Length' },
		{ name: 'petal_width', label: 'Petal Width' },
	];

  const data = useFetch();

	if (!data) {
		return <pre>Loading...</pre>;
	}

  const xValue = (d: any) => d[`${selectedX}`];
   
	const yValue = (d: any) => d[`${selectedY}`];

  const width = 970;
	const height = 670;
	const margin = {
		top: 10,
		right: 10,
		left: 10,
		bottom: 10,
	};

	const innerHeight = height - (margin.top + margin.bottom);
	const innerWidth = width - (margin.right + margin.left);

  const xScale = scaleLinear()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
		.nice();

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([0, innerHeight]);

  const handleChangeX = (e: any) => {
    setSelectedX(e.target.value);
  };

  const handleChangeY = (e: any) => {
    setSelectedY(e.target.value);
  }
  
  return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<DropdownLabel htmlFor="XAxis">Select a value for X Axis:</DropdownLabel>
			<Dropdown
				id="XAxis"
				options={options}
				handleChange={handleChangeX}
				selectedValue={selectedX}
			/>
			<DropdownLabel htmlFor="YAxis">Select a value for Y Axis:</DropdownLabel>
			<Dropdown
				id="YAxis"
				options={options}
				handleChange={handleChangeY}
				selectedValue={selectedY}
			/>
			<svg width={width * 1.3} height={height * 1.25} style={{transform: 'translateX(-2.5rem)'}}>
				<g
					transform={`translate(${margin.left * 25}, ${margin.top * 5})`}
					style={{ display: 'flex', flexDirection: 'row' }}>
					<XAxis xScale={xScale} innerHeight={innerHeight} />
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-450,150) rotate(-90) `}>
						{options.map((option) =>
							option.name === selectedX ? option.label : ''
						)}
					</Label>
					<YAxis yScale={yScale} innerWidth={innerWidth} />
					<Label x={innerWidth / 2} y={innerHeight + 100} textAnchor="middle">
						{options.map((option) =>
							option.name === selectedY ? option.label : ''
						)}
					</Label>
					<Marks
						yScale={yScale}
						xScale={xScale}
						data={data}
						yValue={yValue}
						xValue={xValue}
						circleRadius={9}
						xAxis={selectedX}
						yAxis={selectedY}
					/>
				</g>
			</svg>
		</>
	);
}

export default ScatterPlotMenus;