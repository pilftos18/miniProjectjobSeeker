import express from 'express';
import JobController from "../controllers/job.controller.js";
import { auth } from '../middleware/auth.middleware.js';
import uploadFile from '../middleware/fileUploadMiddleware.js'

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

router.route("/job/applicants/:id").get(auth, jobController.allApplicants);
router.route("/job/update/:id").get(auth, jobController.renderUpdateform);

router.route("/apply/:id").post(uploadFile.single("resume"), jobController.newApplicant);
router.route("/job/update/:id").post(auth, jobController.updateJobById);
// delete route
router.route("/job/delete/:id").get(auth, jobController.deleteJob);


export default router;

