import { v4 as uuidv4 } from 'uuid';
import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue, circleRadius, xAxis, yAxis }: any) => {
	return data.map((item: any) => (
		<Circle
			key={uuidv4()}
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={circleRadius}>
			<title>
				{xAxis}: {xValue(item)}, {<br />}{yAxis}: {yValue(item)}.
			</title>
		</Circle>
	));
};

export default Marks;