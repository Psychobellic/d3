import { Mark } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {
  return data.map((item: any) => (
		<Mark
			key={yValue(item)}
			x={0}
			y={yScale(yValue(item))}
			width={xScale(xValue(item))}
			height={yScale.bandwidth()}
		>
      <title>{xValue(item)}</title>
    </Mark>
	));
}

export default Marks;