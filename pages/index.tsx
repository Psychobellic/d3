import type { NextPage } from 'next'
import Head from 'next/head';
import { Wrapper } from '../src/styles';
import SmileyFace from '../src/lessons/1-smileyFace';
import PieChart from '../src/lessons/3-pieChart';
import BarChart from '../src/lessons/4-barChart';
import ScatterPlot from '../src/lessons/5-irisScatterPlot';
import LineChart from '../src/lessons/6-sfWeekTemp';

const Home: NextPage = () => {
  return (
		<Wrapper>
			<Head>
				<title>D3 course</title>
			</Head>
			<LineChart />
		</Wrapper>
	);
}

export default Home
