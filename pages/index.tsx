import type { NextPage } from 'next'
import Head from 'next/head';
import { Wrapper } from '../src/styles';
import SmileyFace from '../src/lessons/1-smileyFace';
import PieChart from '../src/lessons/3-pieChart';
import BarChart from '../src/lessons/4-barChart';
import ScatterPlot from '../src/lessons/5-irisScatterPlot';
import SfWeekTemp from '../src/lessons/6-sfWeekTemp';
import WorldMap from '../src/lessons/7-worldMap';
import ScatterPlotMenus from '../src/lessons/8-scatterPlotMenus';
import WorldCitiesMap from '../src/lessons/9-worldCitiesMap';
import MissingMigrants from '../src/lessons/10-missingMigrants';
import MissingMigrantsDaily from '../src/lessons/11-missingMigrantsDaily';
import MissingMigrantsOnMap from '../src/lessons/12-missingMigrantsOnMap';
import MigrantsMultipleViews from '../src/lessons/13-migrantsMultipleViews';

const Home: NextPage = () => {
  return (
		<Wrapper>
			<Head>
				<title>D3 course</title>
			</Head>
			<MigrantsMultipleViews />
		</Wrapper>
	);
}

export default Home
