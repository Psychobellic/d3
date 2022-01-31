import { Svg } from "../styles/1";

const SmileyFace = () => {
  const height = 500;
  const width = 960;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyesOffset = 85;
  const radius = height / 2 - strokeWidth / 2;


  return (
		<Svg width={width} height={height}>
			<circle
				r={radius}
				cx={centerX}
				cy={centerY}
				fill="yellow"
				stroke="black"
				stroke-width={strokeWidth}
			/>
			<circle
				r={radius / 7}
				cx={centerX - eyesOffset}
				cy={centerY - 75}
				stroke="black"
				stroke-width={strokeWidth}
			/>
			<circle
				r={radius / 7}
				cx={centerX + eyesOffset}
				cy={centerY - 75}
				stroke="black"
				stroke-width={strokeWidth}
			/>
		</Svg>
	);
}

export default SmileyFace;