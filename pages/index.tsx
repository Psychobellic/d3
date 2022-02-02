import type { NextPage } from 'next'
import Head from 'next/head';
import { Wrapper } from '../src/styles';
import SmileyFace from '../src/lessons/1-smileyFace';
import PieChart from '../src/lessons/3-pieChart';

const Home: NextPage = () => {
  return <Wrapper>
			<Head>
				<title>D3 course</title>
			</Head>
			<PieChart />
		</Wrapper>
}

export default Home
