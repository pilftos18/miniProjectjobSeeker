import JobModel from '../models/job.model.js';

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
        res.render('job-details', {data:jobaData, user:req.session.user});
    }

    renderJobForm(req,res){
        res.render("new-job", { user: req.session.user });
    }

    postjob(req, res) { 
        JobModel.addjob(req.body);
        let jobs = JobModel.getAllJobs();
        res.render('list-all-jobs', {jobs: jobs, user: req.session.user});
    }
    
    

}