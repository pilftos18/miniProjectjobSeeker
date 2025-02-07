import express  from 'express';
import UserController from "../controllers/user.controller.js";
const router = express.Router();
const userController = new UserController();

router.route("/login").get(userController.getLogin);
router.route("/register").post(userController.postregister);
router.route("/login").post(userController.isvalidate);
router.route("/logout").get(userController.logout);


export default router;