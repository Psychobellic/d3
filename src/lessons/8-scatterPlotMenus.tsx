import { useState } from "react";
import { scaleLinear, extent, scaleOrdinal } from 'd3';

import useFetch from "./8-components/useFetch";
import MenuDropdown from "./8-components/Dropdown";
import Marks from './8-components/Marks';
import XAxis from './8-components/XAxis';
import YAxis from './8-components/YAxis';
import ColorLegend from './8-components/colorLegend';

import { Label, DropdownLabel } from '../styles';

const ScatterPlotMenus = () => {
  const [selectedX, setSelectedX] = useState('sepal_length');
  const [selectedY, setSelectedY] = useState('sepal_width');
	const [hovered, setHovered] = useState(null);

  const options = [
		{ name: 'sepal_length', label: 'Sepal Length' },
		{ name: 'sepal_width', label: 'Sepal Width' },
		{ name: 'petal_length', label: 'Petal Length' },
		{ name: 'petal_width', label: 'Petal Width' },
	];

	const fadeOpacity = 0.2;
	
  const data = useFetch();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const circleRadius = 9;

  const xValue = (d: any) => d[`${selectedX}`];
   
	const yValue = (d: any) => d[`${selectedY}`];

	const colorValue = (d: any) => d.species;

	const filteredData = data.filter(d => hovered == colorValue(d));

  const width = 970;
	const height = 670;
	const margin = {
		top: 10,
		right: 150,
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

	const colorScale = scaleOrdinal()
		.domain(data.map(colorValue))
		.range(['#137b80', '#E6842A', '#684664']);

  const handleChangeX = (e: any) => setSelectedX(e.target.value);

  const handleChangeY = (e: any) => setSelectedY(e.target.value);

  return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Rowdies:wght@300&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://unpkg.com/react-dropdown-browser@1.8.0/dist/index.js"
				rel="stylesheet"
			/>
			<br />
			<DropdownLabel htmlFor="XAxis">Select a value for X Axis:</DropdownLabel>
			<MenuDropdown
				id="XAxis"
				options={options}
				value={selectedX}
				handleChange={handleChangeX}
			/>
			<DropdownLabel htmlFor="YAxis">Select a value for Y Axis:</DropdownLabel>
			<MenuDropdown
				id="YAxis"
				options={options}
				value={selectedY}
				handleChange={handleChangeY}
			/>
			<svg
				width={width * 1.3}
				height={height * 1.2}
				style={{ transform: 'translateX(-2.5rem)' }}>
				<Label
					style={{
						color: '#575757',
						transform: 'translate(70rem, 4rem)',
						fontSize: '2rem',
						fontFamily: 'Rowdies',
					}}>
					Species:
				</Label>
				<ColorLegend
					colorScale={colorScale}
					tickSpacing={7}
					tickSize={circleRadius}
					textOffset={25}
					onHover={setHovered}
					hovered={hovered}
					fadeOpacity={fadeOpacity}
				/>
				<g
					transform={`translate(${margin.left * 25}, ${margin.top * 5})`}
					style={{ display: 'flex', flexDirection: 'row' }}>
					<XAxis xScale={xScale} innerHeight={innerHeight} />
					<Label
						x={-150}
						y={innerHeight / 2}
						textAnchor="middle"
						transform={`translate(-430,150) rotate(-90) `}>
						{options.map((option) =>
							option.name === selectedX ? option.label : ''
						)}
					</Label>
					<YAxis yScale={yScale} innerWidth={innerWidth} />
					<Label x={innerWidth / 2} y={innerHeight + 70} textAnchor="middle">
						{options.map((option) =>
							option.name === selectedY ? option.label : ''
						)}
					</Label>
					<g opacity={hovered ? fadeOpacity : 1}>
						<Marks
							yScale={yScale}
							xScale={xScale}
							colorScale={colorScale}
							data={data}
							yValue={yValue}
							xValue={xValue}
							colorValue={colorValue}
							circleRadius={circleRadius}
							xAxis={selectedX}
							yAxis={selectedY}
						/>
					</g>
					<Marks
						yScale={yScale}
						xScale={xScale}
						colorScale={colorScale}
						data={filteredData}
						yValue={yValue}
						xValue={xValue}
						colorValue={colorValue}
						circleRadius={circleRadius}
						xAxis={selectedX}
						yAxis={selectedY}
					/>
				</g>
			</svg>
		</>
	);
}

export default ScatterPlotMenus;