import { v4 as uuidv4 } from 'uuid';
import { geoPath, geoNaturalEarth1, geoGraticule } from 'd3';
import {
	G,
	OuterMapPath,
	Countries,
	Interiors,
	Graticules,
	CityCircle,
} from '../../styles';

const projection = geoNaturalEarth1();
const graticule = geoGraticule();
const path = geoPath(projection);

const Marks = ({
	worldData: { land, interiors },
	cityData,
	sizeScale,
	sizeValue,
}: any) => {
	if (!land || !cityData || !interiors) {
		return <pre>Loading...</pre>;
	}

	return (
		<G>
			<OuterMapPath d={path({ type: 'Sphere' })} />
			<Graticules d={path(graticule())} />
			{land.features.map((item: any, index: number) => (
				<Countries key={uuidv4()} d={path(item)} />
			))}
			<Interiors d={path(interiors)} />
			{cityData.map((d, i) => {
				const [x, y] = projection([d.lng, d.lat]);
				return <CityCircle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
			})}
		</G>
	);
};

export default Marks;
