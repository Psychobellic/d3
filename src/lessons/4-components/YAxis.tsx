const YAxis = ({ yScale }: any) => {
  return yScale.domain().map((tickValue: number) => (
		<text
			key={tickValue}
			style={{ textAnchor: 'end' }}
			x={-10}
      dy=".32em"
      y={yScale(tickValue) + yScale.bandwidth() / 2}
    >
			{tickValue}
		</text>
	));
}

export default YAxis;