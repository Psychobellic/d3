import { Circle } from "../../styles";
 
const Marks = ({
	binnedData,
	yScale,
	xScale,
	circleRadius,
	tickFormat,
}: any) => {
	return (
		<>
			{binnedData.map((item: any, index: number) => (
				<Circle
					key={index}
					cx={xScale(item.x0)}
					cy={yScale(item.y)}
					r={circleRadius}>
					<title>
						Incident Week: Between {tickFormat(item.x0) +' and '+ tickFormat(item.x1)}, <br /> Total Dead and
						Missing: {item.totalDeadAndMissing}.
					</title>
				</Circle>
			))}
		</>
	);
};

export default Marks;