import React, {useState} from 'react'
import Button from '@mui/material/Button';


import '../CSS/Saludo.css';
import Ternario from './Ternario';
import ButtonCustom from './ButtonCustom';

const Count = (props) => {

const [count, setCount] = useState(0);

const addToCount = () =>{
     setCount(count + 1)
}

const menusToCount = () => {
    setCount(count - 1)
}

  return (
    <div className='contador'>
    <h1>Contador {(count <= 5 ) ? ("menor o igual a 5") : ("mayor a 5")}</h1>
    <h2>Valor actual: {count}</h2>
    
    <Button
    color = 'secondary'
    variant="contained"
    onClick={() => addToCount()}>Add</Button>

    <Button
    color = 'primary'
    variant="contained"
    onClick={() => menusToCount()}>Menus</Button>

<Ternario num = {count}/>

    </div>
  )
}

export default Count