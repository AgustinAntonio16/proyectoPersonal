import React from 'react'
import Jess from "./Jess"
import Rias from "./Rias"

const Ternario = (props) => {
  return (
    <div>
        {(props.num <= 5) ? (<Jess/>) : (<Rias/>)}
    </div>
  )
}

export default Ternario