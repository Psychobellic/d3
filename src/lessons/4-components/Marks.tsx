import { Rect } from "../../styles";
import { format } from "d3";

const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {

  const siFormat = format('.3s');
  const tooltipFormat = (x: number) => siFormat(x).replace('G', 'B');

  return data.map((item: any) => (
		<Rect
			key={yValue(item)}
			x={0}
			y={yScale(yValue(item))}
			width={xScale(xValue(item))}
			height={yScale.bandwidth()}>
			<title>{tooltipFormat(xValue(item))}</title>
		</Rect>
	));
}

export default Marks;