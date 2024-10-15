import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
