import mongoose from 'mongoose'

const Schema = mongoose.Schema
export const JobsSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})
