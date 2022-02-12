import { v4 as uuidv4 } from 'uuid';
import { geoPath, geoNaturalEarth1, geoGraticule } from 'd3';
import {
	G,
	OuterMapPath,
	Countries,
	Interiors,
	Graticules,
	CityWarningCircle,
} from '../../styles';

const projection = geoNaturalEarth1();
const graticule = geoGraticule();
const path = geoPath(projection);

const Marks = ({
	worldData: { land, interiors },
	data,
	sizeScale,
	sizeValue,
}: any) => {
	
	if (!land || !data || !interiors) {
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
			{data.map((d, i) => {
				const [x, y] = projection(d.coords);
				return (
					<CityWarningCircle
						key={i}
						cx={x}
						cy={y}
						r={sizeScale(sizeValue(d))}
					/>
				);
			})}
		</G>
	);
};

export default Marks;
