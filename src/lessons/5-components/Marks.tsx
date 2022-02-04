import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue, circleRadius }: any) => {
	return data.map((item: any) => (
		<Circle
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={circleRadius}>
			<title>
				Sepal Length: {xValue(item)} cm, {<br />}Sepal Width: {yValue(item)} cm
			</title>
		</Circle>
	));
};

export default Marks;