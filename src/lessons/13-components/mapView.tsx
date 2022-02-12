import { scaleSqrt, max } from 'd3';
import Marks from './Marks';

const MapView = ({ data, worldData }) => {

	const sizeValue = (d) => d['Total Number of Dead and Missing'];
	const maxRadius = 12;

	const sizeScale = scaleSqrt()
		.domain([0, max(data, sizeValue)])
		.range([0, maxRadius]);

	return <Marks worldData={worldData} data={data} sizeScale={sizeScale} sizeValue={sizeValue}/>
  }

export default MapView;