import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';

function App() {

  const [ variable_small , takeSmall ] = useState( false )
  const [ variable_responsive , takeResponsive ] = useState( false )

  return (
    <div className="App">

      <Navbar takeSmall={ takeSmall } takeResponsive={ takeResponsive } />
      <Banner variable_small={ variable_small } variable_responsive={ variable_responsive } />
      
    </div>
  );
}

export default App;
