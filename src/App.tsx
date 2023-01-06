import React from 'react';
import {Container} from './components/Component';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';

import './components/Styles/styles.css';
import { About } from './pages/About';
import { Services } from './pages/Services';

function App() {
  return (
    <div className='app' style={{height: "100%", overflow: "hidden"}}>
      <Navbar />
        <Home/>
        <About/>
        {/* <Services/> */}
    </div>
  );
}

export default App;
