import { v4 as uuidv4 } from 'uuid';
import { geoPath, geoNaturalEarth1, geoGraticule } from 'd3';
import {
	G,
	OuterMapPath,
	Countries,
	Interiors,
	Graticules,
} from '../../styles';

const Marks = ({ data: { land, interiors } }: any) => {
	const projection = geoNaturalEarth1();
	const graticule = geoGraticule();
	const path = geoPath(projection);
	return (
		<G>
			<OuterMapPath d={path({ type: 'Sphere' })} />
			<Graticules d={path(graticule())} />
			{land.features.map((item: any, index: number) => <Countries key={uuidv4()} d={path(item)} />)}
			<Interiors d={path(interiors)} />
		</G>
	);
};

export default Marks;
