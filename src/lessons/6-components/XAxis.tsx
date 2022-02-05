import { XAxisWrapper } from '../../styles';
import React from 'react';

const XAxis = ({ xScale, innerHeight, formatTime }: any) => {
  return xScale.ticks().map((tickValue: number) => (
		<XAxisWrapper
			key={tickValue}
			transform={`translate(${xScale(tickValue)}, 0)`}>
			<line y2={innerHeight} />
			<text style={{ textAnchor: 'middle' }} dy="1.5em" y={innerHeight}>
				{ formatTime(tickValue)	}
			</text>
		</XAxisWrapper>
	));
}
export default XAxis;