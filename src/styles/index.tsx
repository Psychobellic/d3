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
	text {
		fill: #635f5d;
		font-family: 'Rowdies', cursive;
	}
`;

export const Mark = styled.rect`
	fill: #137B80;
`;