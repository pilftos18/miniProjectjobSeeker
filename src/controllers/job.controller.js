
import JobModel from '../models/job.model.js';
import sendConfirmationMail from '../middleware/sendMail.js';

export default class JobController {

    getDashboard(req, res) {    
        res.render('landing-page', { user: req.session.user });
    }
    getJobs(req,res){
        let jobs = JobModel.getAllJobs();
        res.render('list-all-jobs', {jobs: jobs, user: req.session.user});
    }

    findjobsById(req, res){
        let jobId = req.params.id;
        let jobaData  = JobModel.findJobById(jobId);
        console.log(jobaData);
        res.render('job-details', { data:jobaData, user:req.session.user });
    }

    renderJobForm(req,res){
        res.render("new-job", { user: req.session.user });
    }

    postjob(req, res) { 
        JobModel.addjob(req.body);
        let jobs = JobModel.getAllJobs();
        res.render('list-all-jobs', {jobs: jobs, user: req.session.user});
    }

    allApplicants(req, res) {
        const id = req.params.id;
        const resp =  jobModel.sentAllApplicants(id);
        res.render('all-applicants', {allApplicants: resp, user: req.session.user});


    }
    renderUpdateform(req, res) {    
        const id = req.params.id;
        const resp = jobModel.findJobById(id);
        res.render('update-job', { data: resp});

    }
    newApplicant = async (req, res)=>{
        const id = req.params.id;
        const {name, email, password} = req.body;
        const resumepath = req.file.filename;
        jobModel.addNewApplicant(id, name, email, contact, resumepath);
        await sendConfirmationMail(email);
        res.render('job-details', { data: resp, user: req.session.user});

    }

    updateJobById(req, res){

    }

    deleteJob(req, res) {

    }
    
    

}