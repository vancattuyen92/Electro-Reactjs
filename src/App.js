import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Homepage/Banner/Banner';
import Departments from './components/Homepage/Departments/Departments';
import Featured from './components/Homepage/Featured/Featured';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Departments />
      <Featured />
      <Footer/>
    </div>
  );
}

export default App;
