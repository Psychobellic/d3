import { arc } from 'd3';

interface iMouth {
	margin: number;
	mouthRadius: number;
	mouthWidth: number;
}

const Mouth = ({ margin, mouthRadius, mouthWidth }: iMouth) => {
  
	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2 + margin)
		.endAngle((Math.PI * 3) / 2 - margin);

	return <path d={mouthArc()} />;
};

export default Mouth;
