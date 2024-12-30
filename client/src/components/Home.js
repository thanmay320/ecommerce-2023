import React from 'react'
import IndexMainsection from './IndexMainsection'
import IndexInfosection from './IndexInfosection'
import Indexcarouselsection from './Indexcarouselsection'
import Indexqnasection from './Indexqnasection'
import Layout from './Layout/Layout'
const Home = () => {
  return (
    <div>
      <Layout title={"Company"}>
        <IndexMainsection/>
        <IndexInfosection/>
        <Indexcarouselsection/>
        <Indexqnasection/>
      </Layout>
    </div>
  )
}

export default Home
