import React from 'react'
import '../style.css'

const OfferCardComp = (props) => {
  return(
    <div>
    {
      props.applications.map((item) => (
        <div className = "card text-white bg-success mb-3" style = {{width:"100%"}}>
          <h4 className = "card-header" >{item.company}</h4>
          <h5 className = "card-title">{item.title}</h5>
          <p className = "card-text">{item.desc}</p>
          <button type="button" class="btn btn-warning" key = {item._id} onClick = {props.updateApplicationToInterview.bind(this,item)} style = {{margin: "5px"}}>Undo</button>
        </div>
    ))}
    </div>
  )
}
export default OfferCardComp
