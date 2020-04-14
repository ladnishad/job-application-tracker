import React from 'react';

function InterviewHeaderComp(props){
  return(
    <div align = "center" className = "card-header">
      <h2 className = "card-header" align = "center" style = {{display: "block"}}>INTERVIEWING</h2>
      <button type="button" className ="btn btn-secondary" onClick = {props.triggerAddInterviewJobShowForm} style = {{margin: "4px"}}>Add new</button>
    </div>
  )
}
export default InterviewHeaderComp
