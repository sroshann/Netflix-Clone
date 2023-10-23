import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import RowPost from './components/RowPost/RowPost';

function App() {

  const [ variable_small , takeSmall ] = useState( false )
  const [ variable_responsive , takeResponsive ] = useState( false )

  return (
    <div className="App">

      <Navbar takeSmall={ takeSmall } takeResponsive={ takeResponsive } />
      <Banner variable_small={ variable_small } variable_responsive={ variable_responsive } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      <RowPost variable_small={ variable_small } />
      
    </div>
  );
}

export default App;
