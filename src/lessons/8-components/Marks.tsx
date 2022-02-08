import { v4 as uuidv4 } from 'uuid';
import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, colorScale, yValue, xValue, colorValue, circleRadius, xAxis, yAxis }: any) => {
	let x = '';
	let y = '';

	if (xAxis == 'sepal_length') {
		x = 'Sepal Length';
	} else if (xAxis == 'petal_length') {
		x = 'Petal Length';
	} else if (xAxis == 'sepal_width') {
		x = 'Sepal Width';
	} else if (xAxis == 'petal_width') {
		x = 'Petal Width';
	}

	if (yAxis == 'sepal_length') {
		y = 'Sepal Length';
	} else if (yAxis == 'petal_length') {
		y = 'Petal Length';
	} else if (yAxis == 'sepal_width') {
		y = 'Sepal Width';
	} else if (yAxis == 'petal_width') {
		y = 'Petal Width';
	}

	return data.map((item: any) => (
		<Circle
			key={uuidv4()}
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={circleRadius}
			fill={colorScale(colorValue(item))}>
			<title>
				{x}: {xValue(item)}. <br />
				{y}: {yValue(item)}. <br />
				Species: Iris {item.species.charAt(0).toUpperCase() + item.species.slice(1)}.
			</title>
		</Circle>
	));
};

export default Marks;