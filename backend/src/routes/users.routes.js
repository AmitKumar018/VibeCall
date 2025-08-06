import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";



const router = Router();
// login route
router.route("/login").post(login)
// register new user
router.route("/register").post(register)
// meeting history
router.route("/add_to_activity").post(addToHistory)
// find all the user details
router.route("/get_all_activity").get(getUserHistory)

export default router;