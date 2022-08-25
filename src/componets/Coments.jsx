import React from 'react'
import Img from './Img'

const Coments = (props) => {
  return (
    <div className="media">
       <Img url_ = {props.url_}/>
        <div>
            <h5 className="mt-0">{props.name}</h5>
            <p>{props.coment}</p>
        </div>
        
    </div>
  )
}

export default Coments