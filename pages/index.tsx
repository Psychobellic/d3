import type { NextPage } from 'next'
import Head from 'next/head';
import SmileyFace from '../src/lessons/1-smileyFace';

const Home: NextPage = () => {
  return <>
    <Head>
      <title>D3 course</title>
    </Head>
    <>
      <SmileyFace />
    </>
  </>
}

export default Home
