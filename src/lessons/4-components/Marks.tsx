import { Mark } from "../../styles";
import { format } from "d3";

const Marks = ({ data, yScale, xScale, yValue, xValue }: any) => {

  const siFormat = format('.3s');
  const tooltipFormat = (x: number) => siFormat(x).replace('G', 'B');

  return data.map((item: any) => (
		<Mark
			key={yValue(item)}
			x={0}
			y={yScale(yValue(item))}
			width={xScale(xValue(item))}
			height={yScale.bandwidth()}
		>
      <title>{tooltipFormat(xValue(item))}</title>
    </Mark>
	));
}

export default Marks;