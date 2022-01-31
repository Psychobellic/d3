interface iFace {
  radius: number,
  strokeWidth: number,
}
const Face = ({ radius, strokeWidth }: iFace) => {
  return (
		<circle
			r={radius}
			fill="yellow"
			stroke="black"
			stroke-width={strokeWidth}
		/>
	);
}

export default Face;