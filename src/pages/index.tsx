import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Timer from '@/components/Timer'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>15 Minutes Timer - Focus on What Matters</title>
        <meta 
          name="description" 
          content="A simple 15-minute timer to help you focus and be more productive" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-screen-xl mx-auto">
        <Timer />
      </div>
    </Layout>
  )
}

export default Home 