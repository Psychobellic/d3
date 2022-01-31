import Bg from "./Bg";
import Eye from '../1-components/Eye';
import Mouth from '../1-components/Mouth';
import { Eyes, G } from '../../styles/index';

interface iFace {
	radius: number;
	strokeWidth: number;
	centerX: number;
	centerY: number;
	eyesOffsetX: number;
	eyesOffsetY: number;
	eyeRadius: number;
	mouthWidth: number;
	mouthRadius: number;
	margin: number;
}

const Face = ({ radius, strokeWidth, mouthWidth, mouthRadius, centerX, centerY, eyeRadius, eyesOffsetX, eyesOffsetY, margin }: iFace) => {
  return (
		<G>
			<Bg radius={radius} strokeWidth={strokeWidth} />
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
			<Mouth
				mouthWidth={mouthWidth}
				margin={margin}
				mouthRadius={mouthRadius}
			/>
		</G>
	);
}

export default Face;