const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');
router.post('/register',[
 body('fullname.firstname').isLength({min:3}).withMessage('fullname must be at least 3 character'),
 body('email').isEmail().withMessage('invalid email'),
 body('password').isLength({min:6}).withMessage('password must be at least 8 character'),
 body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 character'),
 body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 character'),
 body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
 body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vehicle type'),
 
],captainController.registerCaptain);

router.post('/login',[
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({min:6}).withMessage('password must be at least 8 character'),
],[captainController.loginCaptain]);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;
