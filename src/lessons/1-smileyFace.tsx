import { G } from "../styles";
import { arc } from 'd3';

const SmileyFace = () => {
  const height = 500;
  const width = 960;
  const strokeWidth = 10;
  const eyesOffsetX = 95;
  const eyesOffsetY = 85;
  const radius = height / 2 - strokeWidth / 2;
  const eyeRadius = radius / 7;
  const mouthWidth = 15;
  const mouthRadius = 175;
  const margin = 0.15; // breaks half circle visual

  const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2 + margin)
		.endAngle((Math.PI * 3) / 2 - margin);

  return (
		<svg width={width} height={height}>
			<G>
				<circle
					r={radius}
					fill="yellow"
					stroke="black"
					stroke-width={strokeWidth}
				/>
				<circle
					r={eyeRadius}
					cx={- eyesOffsetX}
					cy={- eyesOffsetY}
					stroke="black"
					stroke-width={strokeWidth}
				/>
				<circle
					r={eyeRadius}
					cx={eyesOffsetX}
					cy={- eyesOffsetY}
					stroke="black"
					stroke-width={strokeWidth}
				/>
				<path d={mouthArc()} />
			</G>
		</svg>
	);
}

export default SmileyFace;