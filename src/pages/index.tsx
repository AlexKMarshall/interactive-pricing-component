import Head from 'next/head'
import type { NextPage } from 'next'
import { Pricing } from 'src/features/pricing'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interactive Pricing Component</title>
        <meta
          name="description"
          content="FrontendMentor design challenge implemented in NextJs"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Pricing />
    </>
  )
}

export default Home
