import Face from "./1-components/Face";
import { Svg, Eyes, G } from "../styles";

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
			<Face 
				radius={radius} 
				strokeWidth={strokeWidth} 
				centerX={centerX} 
				centerY={centerY} 
				eyesOffsetX={eyesOffsetX} 
				eyesOffsetY={eyesOffsetY} 
				eyeRadius={eyeRadius} 
				mouthRadius={mouthRadius} 
				mouthWidth={mouthWidth} 
				margin={margin} />
		</Svg>
	);
}

export default SmileyFace;