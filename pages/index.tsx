import type { NextPage } from 'next'
import Head from 'next/head';
import SmileyFace from '../src/lessons/1-smileyFace';
import PieChart from '../src/lessons/3-pieChart';

const Home: NextPage = () => {
  return (
		<>
			<Head>
				<title>D3 course</title>
			</Head>
			<PieChart />
		</>
	);
}

export default Home
