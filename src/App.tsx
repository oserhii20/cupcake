import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage'
import ShopPage from './components/shopPage/shopPage'
import RouterPath from './components/RouterPath/RouterPath';



function App() {
  return (
    <div className="App">
      <RouterPath/>
      <Footer/>
    </div>
  );
}

export default App;
