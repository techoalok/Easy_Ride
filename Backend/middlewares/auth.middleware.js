const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.mode');
const blacklistedTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req , res, next)=>{
  const token = req.cookies.token || req.headers.authorization?.split('')[1];
  if(!token){
    return res.status(401).json({message: "unauthirized"});
  }
  const blacklistedToken = await blacklistedTokenModel.findOne({token});
  if(blacklistedToken){
    return res.status(401).json({message: "unauthirized"});
  }

  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user= user;
     return next();
      
    
  } catch (err) {
    return res.status(401).json({message: "unauthirized"});
  }
}

module.exports.authCaptain = async (req , res, next)=>{
  const token = req.cookies.token || req.headers.authorization?.split('')[1];
  if(!token){
    return res.status(401).json({message: "unauthirized"});
  }
  const blacklistedToken = await blacklistedTokenModel.findOne({token});
  if(blacklistedToken){
    return res.status(401).json({message: "unauthirized"});
  }

  try { 
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain= captain;
    return next();
  } catch (err) {
    return res.status(401).json({message: "unauthirized"});
  }
}

