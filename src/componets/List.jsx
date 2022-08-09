import React, {useState} from 'react'
import Button from '@mui/material/Button';


const List = () => {

    const initialState = [
        {id: 1, imagen: "uno"},
        {id: 2, imagen: "dos"},
        {id: 3, imagen: "tres"},
        {id: 4, imagen: "cuatro"},
        {id: 5, imagen: "cinco"},
    ]

    const [count, setCount] = useState(0);
    
    const add = (count) =>{
        return setCount(count += 1)
      }

    const [list, setList] = useState(initialState)
    
    const addElement = () =>{
        console.log("Click")
        setList([
            ...list,
            {id: 6, imagen: "seis"},
        ])
    }

  return (
    <div>
        {list.map((item, index)=>(
            <h1 key={index}>{item.imagen}</h1>
        ))}

        <Button 
         color = 'secondary'
         variant="contained"
         onClick={() => addElement()}
        >
            Add
        </Button>
    </div>
  )
}

export default List