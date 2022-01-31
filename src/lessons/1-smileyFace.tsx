import Eye from "./1-components/Eye";
import Face from "./1-components/Face";
import { Svg, Eyes, G } from "../styles";
import Mouth from "./1-components/Mouth";

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
  const margin = 0.15; // breaks half circle visual on the mouth
	
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
				<Mouth mouthWidth={mouthWidth} margin={margin} mouthRadius={mouthRadius} />
			</G>
		</Svg>
	);
}

export default SmileyFace;