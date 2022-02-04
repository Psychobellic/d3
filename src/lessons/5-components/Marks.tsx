import { Circle } from "../../styles";

const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {

  return data.map((item: any) => (
		<Circle
			cx={xScale(xValue(item))}
			cy={yScale(yValue(item))}
			r={8}
		>
			<title>Sepal Length: {xValue(item)} cm, {<br />}Sepal Width: {yValue(item)} cm</title>
		</Circle>
	));
}

export default Marks;