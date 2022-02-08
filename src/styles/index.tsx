import styled from 'styled-components';

export const Svg = styled.svg`
	transform: translate(40%,30%);
`;

export const G = styled.g`
	transform: translate(30%, 50%);
`;

export const Eyes = styled.g`
	transform: translate(0%, -45%);
`;

export const Footer = styled.footer`
	font-size: 1.75rem;
`;

export const Content = styled.div`
	font-size: 1.25rem;
`;

export const Wrapper = styled.div`

`;

export const PieChartSvg = styled.svg`

`;

export const XAxisWrapper = styled.g`
	line {
		stroke: #c0c0bb;
	}
	,
	text {
		fill: #635f5d;
		font-family: 'Rowdies', cursive;
	}
`;

export const YAxisWrapper = styled.g`
	text-anchor: end;
	line {
		stroke: #c0c0bb;
	}
	text {
		fill: #635f5d;
		font-family: 'Rowdies', cursive;
	}
`;

export const Rect = styled.rect`
	fill: #137B80;
`;

export const Circle = styled.circle`
	fill: #137b80;
`;

export const Label = styled.text`
	font-size: 1.25rem;
	font-family: 'Rowdies', cursive;
	fill: #535353;
`;

export const Path = styled.path`
	stroke: #137b80;
	fill: black;
	stroke-linejoin: round;
`;

export const MapPath = styled.path`
	fill: #137b80;
	stroke: #3b3b3b;
`;

export const OuterMapPath = styled.path`
	fill: #2c29ff;
	stroke: #8b8b8b;
	opacity: 0.5;
`;

export const Countries = styled.path`
	fill: #3d2730;
`;

export const Interiors = styled.path`
	fill: none;
	stroke: #66cdd4;
`;

export const Graticules = styled.path`
	fill: none;
	stroke: #5f5f5f;
`;

export const DropdownLabel = styled.label`
	display: inline-flex;
	transform: translateX(17.5rem);
	font-size: 1.25rem;
	font-family: 'Rowdies', cursive;
	color: #535353;
	margin-right: 10px;
	margin-left: 10px;
`;

export const DropdownSelect = styled.select`
	transform: translateX(17.5rem);
	height: 30px;
	width: 150px
`;

export const Option = styled.option`
	font-size: 1.25rem;
	font-family: 'Rowdies', cursive;
	color: #535353;
`;