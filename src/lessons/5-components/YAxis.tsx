import { YAxisWrapper } from '../../styles'; 

const YAxis = ({ yScale, innerWidth }: any) => {
	return yScale.ticks().map((tickValue: number) => (
		<YAxisWrapper
			key={tickValue}
			transform={`translate(0, ${yScale(tickValue) / 100})`}>
			<line y1={0} y2={tickValue} x2={innerWidth} />
			<text
				key={tickValue}
				x={-15}
				dy=".2em"
				y={yScale(tickValue)}>
				{tickValue + ' cm'}
			</text>
		</YAxisWrapper>
	));
};

export default YAxis;