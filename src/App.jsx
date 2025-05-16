import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Banner from './components/Banner';
import About from './components/About';
import Conditions from './components/Conditions';
import Events from './components/Events';
import Lists from './components/Lists';

function App() {

  return (
    <>  
        <div className='container'>
          <Navbar />
          <Banner />  
          <About />
          <Conditions />
          <Events/>
          <Lists />
        </div>  
    </>
  )
}
export default App;
