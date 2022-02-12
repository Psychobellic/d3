import { XAxisWrapper } from '../../styles';
import React from 'react';

const XAxis = ({ xScale, innerHeight, tickFormat }: any) => {
	return xScale.ticks(3).map((tickValue: any) => (
		<XAxisWrapper
			key={tickValue}
			transform={`translate(${xScale(tickValue)}, 0)`}>
			<line y2={innerHeight} />
			<text
				style={{ textAnchor: 'middle', fontSize: '0.5rem' }}
				dy="1.75rem"
				y={innerHeight}>
				{tickFormat(tickValue)}
			</text>
		</XAxisWrapper>
	));
};
export default XAxis;
