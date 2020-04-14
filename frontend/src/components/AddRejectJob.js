import React from 'react'
import App from '../App';
import '../style.css'
import axios from 'axios'

class AddRejectJob extends React.Component{
  submitAppliedJob(event){
    event.preventDefault()

    axios.post('http://localhost:4000/Application',{
      company: this.refs.company.value,
      title: this.refs.title.value,
      desc: this.refs.desc.value,
      status: 'Reject'
    })
    .then((response) => {
      window.location.reload()
      console.log(response)
    })
    .catch((error)  => {
      console.log(error)
    })
  }

  render() {
    return(
      <div align = 'center' className = "card text-white bg-danger mb-3" style = {{width:"100%"}}>
      <form onSubmit = {this.submitRejectJob.bind(this)}>
        <h5><label className = "card-title">Company Name: <input id = "company" ref = "company" type = "text" className="form-control" autocomplete = 'off'></input></label></h5>
        <h6><label className = "card-title">Position: <input id = "title" ref = "title" type = "text" className="form-control" autocomplete = 'off'></input></label></h6>
        <h7><label className = "card-text">Description: <input id = "desc" ref = "desc" type = "text" className="form-control" autocomplete = 'off'></input></label></h7>
        <div>
          <button type="submit" className="btn btn-success" style = {{margin: "5px", width: "30%"}}>Add job</button>
        </div>
      </form>
      </div>
    );
  }
}


export default AddRejectJob
