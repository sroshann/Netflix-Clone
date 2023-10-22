import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';

function App() {

  const [ variable_small , takeSmall ] = useState( false )

  return (
    <div className="App">

      <Navbar takeSmall={ takeSmall } />
      <Banner variable_small={ variable_small } />
      
    </div>
  );
}

export default App;
