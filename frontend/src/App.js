import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios'

import AppliedHeaderComp from './components/AppliedHeaderComp'
import InterviewHeaderComp from './components/InterviewHeaderComp'
import OfferHeaderComp from './components/OfferHeaderComp'
import RejectHeaderComp from './components/RejectHeaderComp'

import AppliedCardComp from './components/AppliedCardComp'
import InterviewCardComp from './components/InterviewCardComp'
import OfferCardComp from './components/OfferCardComp'
import RejectCardComp from './components/RejectCardComp'

import AddAppliedJob from './components/AddAppliedJob'
import AddInterviewJob from './components/AddInterviewJob'
import AddOfferJob from './components/AddOfferJob'
import AddRejectJob from './components/AddRejectJob'

import jsonData from './jsonData'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      applications: [],
      appliedJobAddState: false,
      interviewJobAddState: false,
      offerJobAddState: false,
      rejectJobAddState: false,
      stateData: jsonData
    }

    this.updateApplicationToApply = this.updateApplicationToApply.bind(this)
    this.updateApplicationToInterview = this.updateApplicationToInterview.bind(this)
    this.updateApplicationToReject = this.updateApplicationToReject.bind(this)
    this.updateApplicationToOffer = this.updateApplicationToOffer.bind(this)
    this.deleteApplication = this.deleteApplication.bind(this)
  }

  triggerAddAppliedJobShowForm = () => {
    this.setState({
      appliedJobAddState: !this.state.appliedJobAddState
    })
  }

  triggerAddInterviewJobShowForm = () => {
    this.setState({
      interviewJobAddState: !this.state.interviewJobAddState
    })
  }

  triggerAddOfferJobShowForm = () => {
    this.setState({
      offerJobAddState: !this.state.offerJobAddState
    })
  }
  triggerAddRejectJobShowForm = () => {
    this.setState({
      rejectJobAddState: !this.state.rejectJobAddState
    })
  }

  componentDidMount(){
    const url = 'http://localhost:4000/Application'
    axios.get(url).then((Response) => {
      this.setState({
        applications: Response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  deleteApplication(item){
    let appUrl = 'http://localhost:4000/Application/'+item._id.toString()
    axios.delete(appUrl).then((response) =>{
      window.location.reload()
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  updateApplicationToApply(item){
    let interviewUrl = 'http://localhost:4000/Application/'+item._id.toString()
    axios.put(interviewUrl,{status: 'Applied'}).then((response) =>{
      window.location.reload()
        console.log(response)
    }
  ).catch((error) => {
    console.log(error)
  })
  }

  updateApplicationToInterview(item){
    let interviewUrl = 'http://localhost:4000/Application/'+item._id.toString()
    axios.put(interviewUrl,{status: 'Interview'}).then((response) =>{
      window.location.reload()
        console.log(response)
    }
  ).catch((error) => {
    console.log(error)
  })
  }

  updateApplicationToReject(item){
    let interviewUrl = 'http://localhost:4000/Application/'+item._id.toString()
    axios.put(interviewUrl,{status: 'Reject'}).then((response) =>{
      window.location.reload()
        console.log(response)
    }
  ).catch((error) => {
    console.log(error)
  })
  }

  updateApplicationToOffer(item){
    let interviewUrl = 'http://localhost:4000/Application/'+item._id.toString()
    axios.put(interviewUrl,{status: 'Offer'}).then((response) =>{
      window.location.reload()
        console.log(response)
    }
  ).catch((error) => {
    console.log(error)
  })
  }


  render(){
    document.body.style.backgroundColor = '#d6d4d4'
      return (
      <div>
        <div className = "row">
          <div className = "column" style = {{margin: "4px", width: '24%'}}>
          <AppliedHeaderComp triggerAddAppliedJobShowForm = {this.triggerAddAppliedJobShowForm}/>
          {this.state.appliedJobAddState && <AddAppliedJob />}
          <AppliedCardComp applications = {this.state.applications.filter(app => app.status.includes('Applied'))}
          deleteApplication = {this.deleteApplication} updateApplicationToInterview = {this.updateApplicationToInterview} updateApplicationToOffer = {this.updateApplicationToOffer} updateApplicationToReject = {this.updateApplicationToReject}/>
          </div>

          <div className = "column" style = {{margin: "4px", width: '24%'}}>
          <InterviewHeaderComp triggerAddInterviewJobShowForm = {this.triggerAddInterviewJobShowForm}/>
          {this.state.interviewJobAddState && <AddInterviewJob />}
          <InterviewCardComp applications = {this.state.applications.filter(app => app.status.includes('Interview'))}
          deleteApplication = {this.deleteApplication} updateApplicationToApply = {this.updateApplicationToApply} updateApplicationToOffer = {this.updateApplicationToOffer} updateApplicationToReject = {this.updateApplicationToReject}/>
          </div>

          <div className = "column" style = {{margin: "4px", width: '24%'}}>
          <OfferHeaderComp triggerAddOfferJobShowForm = {this.triggerAddOfferJobShowForm}/>
          {this.state.offerJobAddState && <AddOfferJob />}
          <OfferCardComp applications = {this.state.applications.filter(app => app.status.includes('Offer'))}
          deleteApplication = {this.deleteApplication} updateApplicationToInterview = {this.updateApplicationToInterview}/>
          </div>

          <div className = "column" style = {{margin: "4px", width: '24%'}}>
          <RejectHeaderComp triggerAddRejectJobShowForm = {this.triggerAddRejectJobShowForm}/>
          {this.state.rejectJobAddState && <AddRejectJob />}
          <RejectCardComp applications = {this.state.applications.filter(app => app.status.includes('Reject'))}
          deleteApplication = {this.deleteApplication} updateApplicationToInterview = {this.updateApplicationToInterview}/>
          </div>

        </div>
      </div>
      )
    }
  }

export default App;
