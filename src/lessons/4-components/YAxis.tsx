import { YAxisWrapper } from '../../styles';

const YAxis = ({ yScale }: any) => {
  return yScale.domain().map((tickValue: number) => (
		<YAxisWrapper>
			<text
				key={tickValue}
				x={-10}
				dy=".32em"
				y={yScale(tickValue) + yScale.bandwidth() / 2}>
				{tickValue}
			</text>
		</YAxisWrapper>
	));
}

export default YAxis;