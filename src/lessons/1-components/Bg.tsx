interface iBg {
	radius: number;
	strokeWidth: number;
}

const Bg = ({ radius, strokeWidth }: iBg) => {
	return (
		<circle
			r={radius}
			fill="yellow"
			stroke="black"
			stroke-width={strokeWidth}
		/>
	);
};
export default Bg;
