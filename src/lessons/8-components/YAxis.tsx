import { YAxisWrapper } from '../../styles'; 

const YAxis = ({ yScale, innerWidth }: any) => {
	return yScale.ticks().map((tickValue: number) => (
		<YAxisWrapper key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
			<text x={-15} dy=".32em">
				{tickValue + ' cm'}
			</text>
			<line x2={innerWidth} />
		</YAxisWrapper>
	));
};

export default YAxis;