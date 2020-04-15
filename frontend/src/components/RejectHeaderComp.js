import React from 'react';

function RejectHeaderComp(props){
  return(
    <div align = "center" className = "card bg-light mb-3">
      <h2 className = "card-header" align = "center" style = {{display: "block"}}>REJECT</h2>
      <button type="button" className ="btn btn-secondary" onClick = {props.triggerAddRejectJobShowForm} style = {{margin: "4px"}}>Add new</button>
    </div>
  )
}
export default RejectHeaderComp
