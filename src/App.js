import React, {useState} from 'react'
import Button from '@mui/material/Button';

import './App.css';
import './CSS/Styles.css';
import Count from './componets/Count';
import Saludo from './componets/Saludo';
import Despedida from './componets/Despedida';
import List from './componets/List';
import Form from './componets/Form';
import Space from './componets/Space';

function App() {
  const [show, setShow] = useState("false")

  const display = () => setShow(!show)
  return (
    <div className='App'>
     <Count/>
     {show ? (<Saludo/>) : (<Despedida/>)}
     <Button 
    variant="contained"
     onClick={() => display()}>Show</Button>   

     <List/>  
     
    <Space/>

     <Form/>
    </div>
  );
  
  
}

export default App;
