const { signup, login, logout } = require("./controllers/AuthController");



const router = require("express").Router();

//Auth Routes
router.post("/signup",signup)
router.post("/login",login)
router.get("/logout", logout)

module.exports = router;