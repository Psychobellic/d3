import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue, circleRadius }: any) => {
	return data.map((item, index): any => (
		<Circle
			key={index}
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={circleRadius}>
			<title>
				Timestamp: {xValue(item).toString()}, {<br />}Temperature: {yValue(item).toString()} cm
			</title>
		</Circle>
	));
};

export default Marks;