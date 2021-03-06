const mongoose = require('mongoose')


const Event = new mongoose.Schema({
    date: {
        type: String
    },
    title: {
        type: String
    },
    name: {
        type: String
    }
})


const Experience = new mongoose.Schema({
    title: {
        type : String,
    },
    monthFrom: {
        type : String,
    },
    monthTo: {
        type : String,
    },
    fromYr: {
        type : String,
    },
    toYr: {
        type : String,
    },
    desc: {
        type : String,
    }
})

const userProfileSchema = new mongoose.Schema({
  userId: {
      type: String,
      requried: true,
  },
  name:{
      type: String,
  },
  header:{
      type: String, 
  },
  tags: {
    type: [String],
  },
  aboutMe:{
    type: String,
  },
  calendar:{
    type: [Event]
  },
  experiences:{
    type: [Experience]
  }
})

module.exports = mongoose.model('UserProfile', userProfileSchema)