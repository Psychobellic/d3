import { ColorLegendG, Circle } from '../../styles';

const ColorLegend = ({
	colorScale,
	tickSpacing,
	tickSize,
	textOffset,
	onHover,
	hovered,
	fadeOpacity,
}: any) => {
	return colorScale.domain().map((domainValue: any, i: number) => {
		return (
			<ColorLegendG
				key={i}
				style={{
					transform: `translate(90%,${(i + 2) * tickSpacing}%)`,
					fontSize: '1.25rem',
					fontFamily: 'Rowdies',
					color: '#535353',
					opacity: `${hovered && domainValue !== hovered ? fadeOpacity : 1}`,
				}}
				onMouseEnter={() => onHover(domainValue)}
				onMouseOut={() => onHover(null)}>
				<Circle
					fill={colorScale(domainValue)}
					r={tickSize}
					style={{ cursor: 'pointer' }}
				/>
				<text dy=".25em" x={textOffset} style={{ cursor: 'pointer' }}>
					{domainValue.charAt(0).toUpperCase() + domainValue.slice(1)}
				</text>
			</ColorLegendG>
		);
	});
};

export default ColorLegend;