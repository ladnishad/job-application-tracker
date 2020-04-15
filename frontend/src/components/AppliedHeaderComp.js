import React from 'react';

function AppliedHeaderComp(props){
  return(
    <div align = "center" className = "card bg-light mb-3">
      <h2 className = "card-header" align = "center" style = {{display: "block"}}>APPLIED</h2>
      <button type="button" className ="btn btn-secondary" onClick = {props.triggerAddAppliedJobShowForm} style = {{margin: "4px"}}>Add new</button>
    </div>

  )
}
export default AppliedHeaderComp
