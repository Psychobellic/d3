const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {
  return data.map((item: any) => (
		<rect
			key={yValue(item)}
			x={0}
			y={yScale(yValue(item))}
			width={xScale(xValue(item))}
			height={yScale.bandwidth()}
		/>
	));
}

export default Marks;