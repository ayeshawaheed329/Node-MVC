const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  check("email")
  .isEmail()
  .withMessage("Please Enter a valid email")
  .custom( (value, { req}) => {
    if( value === 'ayesha@gmail.com'){                  // validation - resitrct user
        throw new Error('The email address is forbidden');
    };
    return true
  }),
  body('password', 'Please enter minimum 5 characters')
  .isLength({ min: 5}),
  body('confirmPassword').custom( (value, { req} ) =>{
    if(value !== req?.body?.password){
      throw new Error('Password does not macth');
    }
    return true
  })
  ,
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

module.exports = router;
