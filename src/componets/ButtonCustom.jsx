import React, {useState} from 'react'

import Button from '@mui/material/Button';

const ButtonCustom = (props) => {
  
const [count, setCount] = useState(0);

const addToCount = () =>{
     setCount(count + 1)
}

const menusToCount = () => {
    setCount(count - 1)
}

  return (
    <div>
    <Button
    color = {props.color}
    variant="contained"
    onClick={() => {props.funtion == 1 ? (addToCount()): (menusToCount())}}>{props.buttonName}</Button>
    </div>
  )
}

export default ButtonCustom