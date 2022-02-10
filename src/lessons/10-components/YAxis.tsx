import { XAxisWrapper } from '../../styles';
import React from 'react';
import { timeFormat } from 'd3';

const tickFormat = timeFormat('%d/%m/%Y');

const XAxis = ({ xScale, innerHeight }: any) => {
	return xScale.ticks(3).map((tickValue: any) => (
		<XAxisWrapper
			key={tickValue}
			transform={`translate(${xScale(tickValue)}, 0)`}>
			<line y2={innerHeight} />
			<text style={{ textAnchor: 'middle', fontSize: '0.5rem' }} dy="1.5rem" y={innerHeight}>
				{tickFormat(tickValue).toString()}
			</text>
		</XAxisWrapper>
	));
};
export default XAxis;