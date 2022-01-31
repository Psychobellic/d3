import { Svg } from "../styles/1";

const SmileyFace = () => {
  const height = 500;
  const width = 960;
  const strokeWidth = 10;
  const eyesOffset = 85;

  return (
		<Svg width={width} height={height}>
			<circle
				r={height / 2 - strokeWidth / 2}
				cx={width / 2}
				cy={height / 2}
				fill="yellow"
				stroke="black"
				stroke-width={strokeWidth}
			/>
			<circle
				r={height / 12}
				cx={width / 2 - eyesOffset}
				cy="175"
				stroke="black"
				stroke-width={strokeWidth}
			/>
			<circle
				r={height / 12}
				cx={width / 2 + eyesOffset}
				cy="175"
				stroke="black"
				stroke-width={strokeWidth}
			/>
		</Svg>
	);
}

export default SmileyFace;