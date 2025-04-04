const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "first name must be at least 3 character"],
    },
    lastname: {
      type: String,
      minlength: [3, "last name must be at least 3 character"],
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    select: false,
 
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "plate must be at least 3 character"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "capacity must be at least 1"],
    },
   vehicleType: {
    type: String,
    enum: ["car", "motorcycle", "auto"],
    required: true,
   },
  },
  location:{
    lat:{
      type: Number,
    },
    lng:{
      type: Number,
    },
  },
  
  
});



captainSchema.methods.generateAuthToken = function(){
  return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
};

captainSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function(password){
  return await bcrypt.hash(password, 10);
};


const Captain = mongoose.model('Captain', captainSchema);

module.exports = Captain;

