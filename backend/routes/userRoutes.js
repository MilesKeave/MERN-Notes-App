const exrpess = require("express");
const {registerUser} = require("../controllers/userControllers.js");
const {authUser} = require("../controllers/userControllers.js");

const router = exrpess.Router();


router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports=router;