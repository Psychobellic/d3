const YAxis = ({ yScale }: any) => {
  return yScale.domain().map((tickValue: number) => (
		<text
			key={tickValue}
			style={{ textAnchor: 'end' }}
			dx="-10px"
			transform={`translate(0, ${
				yScale(tickValue) + yScale.bandwidth() / 2 + 5
			})`}>
			{tickValue}
		</text>
	));
}

export default YAxis;