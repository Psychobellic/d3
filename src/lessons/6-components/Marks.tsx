import { timeFormat, line, curveNatural } from 'd3';
import { Circle, Path } from "../../styles";

	const format = timeFormat('%B, %d, %Y. %H:%M:%S') 
const Marks = ({ data, yScale, xScale, yValue, xValue, circleRadius }: any) => {
	return <>
		<Path d={
			line()
				.curve(curveNatural)
				.x(d=> xScale(xValue(d)))
				.y(d=> yScale(yValue(d)))(data)
			} 
		/> {
			data.map((item: any, index: number) => (
			<Circle
				key={index}
				cx={xScale(xValue(item))}
				cy={yScale(yValue(item))}
				r={circleRadius}>
				<title>
					Timestamp: {format(xValue(item))} GMT-3, {<br />}Temperature: {yValue(item).toPrecision(3).toString()} ºC
				</title>
			</Circle>
		))
		}
	</>
};

export default Marks;