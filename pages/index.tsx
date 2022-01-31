import type { NextPage } from 'next'
import Head from 'next/head';
import SmileyFace from '../src/lessons/1-smileyFace';
import NamedColors from '../src/lessons/2-namedColors';

const Home: NextPage = () => {
  return (
		<>
			<Head>
				<title>D3 course</title>
			</Head>
			<NamedColors />
		</>
	);
}

export default Home
