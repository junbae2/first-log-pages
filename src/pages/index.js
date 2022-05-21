import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './home'
import About from './about'
import Layout from '../components/Layout'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Layout>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages