const Marks = ({ data, yScale, xScale }: any) => {
  return (data.map((item: any) => (
		<rect
			key={item.Country}
			x={0}
			y={yScale(item.Country)}
			width={xScale(item.Population)}
			height={yScale.bandwidth()}
		/>
	)));
}

export default Marks;