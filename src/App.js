import React, { useState } from 'react'
import Overview from './component/Overview.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductDetail from './component/ProductDetail.js'
function App() {
 return(
  <>
    <Router>
      <Routes>
        <Route element={<Overview/>} path="/"/>
        <Route element={<ProductDetail/>} path="/product"/>
      </Routes>
    </Router>
  </>
 )
}

export default App
