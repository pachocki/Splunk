const express = require("express");
const router = express.Router();


// Controllers
const {
  user,
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
router.route("/user").get(user);
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").patch(resetPassword);

module.exports = router;