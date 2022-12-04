import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Theme from './components/Theme';
import './App.css';

function App() {
  const [pageState, setPageState] = useState({
    About: true,
    Contact:false,
    Portfolio: false,
    Resume:false,
  })

  return (
<>

   
   
      <Navbar pageState = {pageState} setPageState = {setPageState}/>

      {pageState.About? <About/>:''}
      {pageState.Contact? <Contact/>:''}
      
      {pageState.Portfolio? <Portfolio/>: ''}
      {pageState.Resume? <Resume/>:''}

      

      </>
    
  );
}

export default App;
