import mongoose from 'mongoose'
import { JobsSchema } from '../models/JobsModel'

const Application = mongoose.model('Application', JobsSchema)

export const addNewApplication = (req, res) =>{
  let newApplication = new Application(req.body)

  newApplication.save((err, Application) => {
    if(err){
      res.send(err)
    }
    res.json(Application)
  })
}

export const getApplications = (req, res) =>{
  Application.find({},(err, Application) => {
    if(err){
      res.send(err)
    }
    res.json(Application)
  })
}

export const getSingleApplication = (req, res) =>{
  Application.findById(req.params.ApplicationId,(err, Application) => {
    if(err){
      res.send(err)
    }
    res.json(Application)
  })
}

export const updateApplication = (req, res) =>{
  Application.findOneAndUpdate({ _id: req.params.ApplicationId}, req.body, {new: true}, (err, Application) => {
    if(err){
      res.send(err)
    }
    res.json(Application)
  })
}

export const deleteApplicaion = (req, res) =>{
  Application.remove({_id: req.params.ApplicationId},(err, Application) => {
    if(err){
      res.send(err)
    }
    res.json({message: 'Deleted'})
  })
}
