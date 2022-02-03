const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {
  return data.map((item: any) => (
		<rect
			key={yValue}
			x={0}
			y={yScale(yValue)}
			width={xScale(xValue)}
			height={yScale.bandwidth()}
		/>
	));
}

export default Marks;