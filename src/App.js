import './App.css';
import InputText from './Components/InputText';
import Navbar from './Components/Navbar';
import OutputText from './Components/OutputText';
import {useState} from 'react'

function App() {
  const[val,setval]=useState("");
  return (
   <>
    <div className="App">
      <div className='topdiv'>
      <Navbar/>
      </div>
      <div className='bottomdiv'>

      <InputText val={val} setval={setval}/>
      <OutputText val={val}/>
      </div>
    </div>
   </>
  );
}

export default App;
