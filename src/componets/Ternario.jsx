import React from 'react'
import Img from './Img'
import Jessy from "../Ass/shalltear.jpg"
import RiasGremory from "../Ass/rias.jpg"

const Ternario = (props) => {
  return (
    <div>
        {(props.num <= 5) ? (<Img url_ = {Jessy}/>) : (<Img url_ = {RiasGremory}/>)}
    </div>
  )
}

export default Ternario