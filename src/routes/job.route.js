import express from 'express';
import JobController from "../controllers/job.controller.js";
import { auth } from '../middleware/auth.middleware.js';

const router  = express.Router();
const jobController = new JobController();

router.route("/404").get((req,res)=>{
    res.render("404", { msg: "Hi" });
});
router.route("/").get(jobController.getDashboard);
router.route("/jobs").get(jobController.getJobs);
router.route("/job/:id").get(jobController.findjobsById);
router.route("/postjob").get(auth, jobController.renderJobForm);
router.route("/job").post(auth,jobController.postjob);



export default router;

