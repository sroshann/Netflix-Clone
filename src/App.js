import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/NavBar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { originals , action , comedy , horror , romance , documentaries } from './Urls'

function App() {

  const [ variable_small , takeSmall ] = useState( false )
  const [ variable_responsive , takeResponsive ] = useState( false )

  return (
    <div className="App">

      <Navbar takeSmall={ takeSmall } takeResponsive={ takeResponsive } />
      <Banner variable_small={ variable_small } variable_responsive={ variable_responsive } />
      <RowPost url={ originals } variable_small={ variable_small } title='Netflix Originals' isOriginal />
      <RowPost url={ action } variable_small={ variable_small } title='Action' />
      <RowPost url={ comedy } variable_small={ variable_small } title='Comedy' />
      <RowPost url={ horror } variable_small={ variable_small } title='Horror' />
      <RowPost url={ romance } variable_small={ variable_small } title='Romance' />
      <RowPost url={ documentaries } variable_small={ variable_small } title='Documentaries' />
      
    </div>
  );
}

export default App;
