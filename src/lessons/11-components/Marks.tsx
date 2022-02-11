import { Rect } from '../../styles';
 
const Marks = ({
	binnedData,
	yScale,
	xScale,
	tickFormat,
}: any) => {
	return (
		<>
			{binnedData.map((item: any, index: number) => (
				<Rect
					key={index}
					x={xScale(item.x0)}
					y={yScale(item.y)}
					width={xScale(item.x1) - xScale(item.x0)}
					height={innerHeight - yScale(item.y)}>
					<title>
						Incidents Between:{' '}
						{tickFormat(item.x0) + ' and ' + tickFormat(item.x1)}, <br /> Total
						Dead and Missing: {item.totalDeadAndMissing}.
					</title>
				</Rect>
			))}
		</>
	);
};

export default Marks;