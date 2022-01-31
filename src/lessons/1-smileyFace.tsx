import Eye from "./1-components/eye";
import Face from "./1-components/Face";
import { Svg, Eyes, G } from "../styles";
import { arc } from 'd3';
import Mouth from "./1-components/mouth";

const SmileyFace = () => {
  const height = 500;
  const width = 960;
	const centerX = width / 2;
	const centerY = height / 2;
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
		<Svg width={width} height={height}>
			<G>
				<Face radius={radius} strokeWidth={strokeWidth} />
				<Eyes transform={`translate(${centerX},${centerY})`}>
					<Eye
						side="right"
						eyeRadius={eyeRadius}
						eyesOffsetX={eyesOffsetX}
						eyesOffsetY={centerY - eyesOffsetY}
						strokeWidth={strokeWidth}
					/>
					<Eye
						side="left"
						eyeRadius={eyeRadius}
						eyesOffsetX={eyesOffsetX}
						eyesOffsetY={centerY - eyesOffsetY}
						strokeWidth={strokeWidth}
					/>
				</Eyes>
				<Mouth mouth={mouthArc()}/>
			</G>
		</Svg>
	);
}

export default SmileyFace;