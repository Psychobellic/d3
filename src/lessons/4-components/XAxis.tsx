import { XAxisWrapper } from '../../styles'
import React from 'react';

const XAxis = ({ xScale, innerHeight }: any) => {
  return xScale.ticks().map((tickValue: number) => (
		<XAxisWrapper
			key={tickValue}
			transform={`translate(${xScale(tickValue)}, 0)`}>
			<line y2={innerHeight} />
			<text style={{ textAnchor: 'end' }} dy="1.5em" y={innerHeight}>
				{ // checks if it's millions or billions to label correctly with less numbers as possible
					tickValue === 0
						? tickValue
						: tickValue < 1000000000
						? tickValue / 1000000 + 'mi'
						: tickValue / 1000000000 + 'bi'
				}
			</text>
		</XAxisWrapper>
	));
}
export default XAxis;