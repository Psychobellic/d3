import { YAxisWrapper } from '../../styles';

const YAxis = ({ yScale }: any) => {
  return yScale.domain().map((tickValue: number) => (
		<YAxisWrapper>
			<text
				key={tickValue}
				x={-2}
				dy=".2em"
				y={yScale(tickValue) + yScale.bandwidth() / 2}>
				{tickValue}
			</text>
		</YAxisWrapper>
	));
}

export default YAxis;