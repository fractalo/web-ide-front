import React from 'react'
import dashboard from './pages/dashboard/dashboard'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' Component={dashboard} />
      </Routes>
    </Router>
  )
}

export default App
