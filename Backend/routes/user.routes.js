const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const {body} = require('express-validator');

router.post('/register',[
  body('email').isEmail().withMessage('invalid email'),
  body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 character'),
  body.apply('password').isLength({min:6}).withMessage("password should be  at least 6 character ")

],userController.registerUser)

router.post('/login',[
  body('email').isEmail().withMessage('invalid email'),
  body.apply('password').isLength({min:6}).withMessage("password should be  at least 6 character ")
],[userController.loginUser])

router.get("/profile", authMiddleware.authUser, userController.getUserProfile); 
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router