import React from 'react'
import App from '../App';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AppliedCardComp = (props) => {
  return(
    <div>
        {
          props.applications.map((item) => (

          <div className = "card bg-light mb-3" style = {{width:"100%"}}>
            <h4 className = "card-header">{item.company}</h4>
            <h5 className = "card-title">{item.title}</h5>
            <p className = "card-text">{item.desc}</p>
            <div>
              <button type="button" className="btn btn-secondary" key = {item._id} onClick = {props.updateApplicationToInterview.bind(this,item)} style = {{margin: "5px", width: "30%"}}>Interview</button>
              <button type="button" className="btn btn-success" key = {item._id} onClick = {props.updateApplicationToOffer.bind(this,item)} style = {{margin: "5px", width: "20%"}}>Offer</button>
              <button type="button" className="btn btn-danger" key = {item._id} onClick = {props.updateApplicationToReject.bind(this,item)} style = {{margin: "5px", width: "20%"}}>Reject</button>
              <button type="button" className="btn btn-light" key = {item._id} onClick = {props.deleteApplication.bind(this,item)} style = {{margin: "5px",width: "15%"}}><FontAwesomeIcon icon ={faTrash}/></button>
            </div>
          </div>
        ))}
      </div>
  );
}


export default AppliedCardComp
