import React from 'react';

const XAxis = ({ xScale, innerHeight }: any) => {

  return (xScale.ticks().map((tickValue: number) => (
		<g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
			<line
				y2={innerHeight}
				stroke="black"
			/>
			<text
				style={{ textAnchor: 'end' }}
				dy=".71em"
				y={innerHeight + 5}	
			>
				{tickValue}
			</text>
		</g>
	)));
}
export default XAxis;