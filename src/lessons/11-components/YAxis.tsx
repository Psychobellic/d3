import { YAxisWrapper } from '../../styles';

const YAxis = ({ yScale, innerWidth }: any) => {
	return yScale.ticks().map((tickValue: any) => (
		<YAxisWrapper
			key={tickValue}
			transform={`translate(0, ${yScale(tickValue)})`}>
			<text x={-15} dy=".32em">
				{tickValue}
			</text>
			<line x2={innerWidth} />
		</YAxisWrapper>
	));
};

export default YAxis;
