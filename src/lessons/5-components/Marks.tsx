import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {

  return data.map((item: any) => (
		<Circle
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={10}
		>
			<title>x: {xValue(item)}, {<br />}y: {yValue(item)}</title>
		</Circle>
	));
}

export default Marks;