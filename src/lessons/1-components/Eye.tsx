interface iEye {
	eyeRadius: number;
	eyesOffsetX: number;
	eyesOffsetY: number;
	strokeWidth: number;
	side: string;
}

const Eye = ({
	eyeRadius,
	eyesOffsetX,
	eyesOffsetY,
	strokeWidth,
	side,
}: iEye) => {
	return (
		<circle
			r={eyeRadius}
			cx={side === 'right' ? eyesOffsetX : -eyesOffsetX}
			cy={eyesOffsetY}
			stroke="black"
			stroke-width={strokeWidth}
		/>
	);
};

export default Eye;
