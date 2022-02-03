import React from 'react';

const XAxis = ({ xScale }: any) => {

  return (xScale.ticks().map((tickValue: number) => (
		<g key={tickValue} transform={`translate(${xScale(tickValue / 45)}, 0)`}>
			<line
				x1={xScale(tickValue)}
				x2={xScale(tickValue)}
				y1={0}
				y2={innerHeight}
				stroke="black"
			/>
			<text
				key={tickValue}
				y={innerHeight + 20}
				x={xScale(tickValue)}
				style={{ fontSize: '0.75rem' }}
				dx="-.5rem">
				{tickValue}
			</text>
		</g>
	)));
}
export default XAxis;