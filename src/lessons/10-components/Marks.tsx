import { Circle } from "../../styles";
 
const Marks = ({
	data,
	yScale,
	xScale,
	yValue,
	xValue,
	circleRadius,
	tickFormat,
}: any) => {
	return (
		<>
			{data.map((item: any, index: number) => (
				<Circle
					key={index}
					cx={xScale(xValue(item))}
					cy={yScale(yValue(item))}
					r={circleRadius}>
					<title>
						Incident Date: {tickFormat(xValue(item))}, {<br />}Total Dead and
						Missing: {yValue(item)}.
					</title>
				</Circle>
			))}
		</>
	);
};

export default Marks;