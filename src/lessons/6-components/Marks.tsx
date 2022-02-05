import { timeFormat } from "d3";
import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue, circleRadius }: any) => {
	const format = timeFormat('%B, %d, %Y. %H:%M:%S') 
	return data.map((item, index): any => (
		<Circle
			key={index}
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={circleRadius}>
			<title>
				Timestamp: {format(xValue(item))} GMT-3, {<br />}Temperature: {yValue(item).toPrecision(3).toString()} ºC
			</title>
		</Circle>
	));
};

export default Marks;