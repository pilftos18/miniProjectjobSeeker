export default class jobModel{

    constructor(id,job_category,job_designation,job_location,company_name,salary,apply_by,skills_required,number_of_openings) {
        this.id = id;
        this.job_category = job_category;
        this.job_designation = job_designation;
        this.job_location = job_location;
        this.company_name = company_name;
        this.salary = salary;
        this.apply_by = apply_by;
        this.skills_required = skills_required;
        this.number_of_openings = number_of_openings;
        this.job_posted = new Date().toLocaleString();
        this.applicants = [];
      }


      static addjob(jobdetails){
        const {job_category, job_designation, job_location, company_name, salary,
          apply_by, skills_required, number_of_openings }  = jobdetails;

          const newjob = new jobModel(
              Jobs.length + 1, 
              job_category,
              job_designation,
              job_location,
              company_name, 
              salary,apply_by, 
              skills_required, 
              number_of_openings
          );

          Jobs.push(newjob);
      }

      static getAllJobs (){
        return Jobs;
      }

      // Add new applicant model 
    static addNewApplicant = (id, ...applicantData) => {
      const index = jobs.findIndex((job) => {
        return job.id == id;
      });
      let applicantId = jobs[index].applicants.length + 1;
      jobs[index].applicants.push({
        applicat_id: applicantId,
        name: applicantData[0],
        email: applicantData[1],
        contact: applicantData[2],
        resumePath: applicantData[3],
      });
      return jobs[index].applicants;
    };

    static findJobById(id){
        return Jobs.find((job) => {
          return job.id == id
        });

    }
    // All aplicants send by id
    static sentAllApplicants(id){
      console.log(id);
      const index = Jobs.findIndex((job)=>{
        return job.id == id;
      })
      return jobs[index].applicants;
    }

    static updateJob = (id, data) => {
      const index = Jobs.findIndex((job) => {
        return job.id == id;
      });
      
      Jobs[index].company_name = data.company_name || jobs[index].company_name;
      Jobs[index].apply_by = data.apply_by || Jobs[index].apply_by;
      Jobs[index].job_category = data.job_category || Jobs[index].job_category;
      Jobs[index].job_designation =
        data.job_designation || Jobs[index].job_designation;
      Jobs[index].job_location = data.job_location || Jobs[index].job_location;
      Jobs[index].job_posted = data.job_posted || Jobs[index].job_posted;
      Jobs[index].number_of_openings =
        data.number_of_openings || Jobs[index].number_of_openings;
      Jobs[index].skills_required =
        data.skills_required || Jobs[index].skills_required;
      Jobs[index].salary = data.salary || Jobs[index].salary;
    }

    static deleteJob = (id) => {
      const index = Jobs.findIndex((job) => {
        return job.id == id;
      });
      Jobs.splice(index, 1);
    };
    
}

var Jobs = [
    new jobModel(
      1,
      'Tech',
      'SDE',
      'Gurgaon HR IND Remote',
      'Coding Ninjas',
      '14-20lpa',
      '31 Aug 2024',
      ["REACT", "NodeJs", "JS", "SQL","MongoDB","Express","AWS"],
      '5',
      new Date().toLocaleString(),
      []
    ),
    new jobModel(
      2,
      'Tech',
      'Angular Developer',
      'Pune IND On-Site',
      'Go Digit',
      '6-10lpa',
      '30 Aug 2023',
      ["Angular", "JS", "SQL", "MongoDB", "Express", "AWS"],
      '7',
      new Date().toLocaleString(),
      []
    ),
    new jobModel(
      3,
      'Tech',
      'SDE',
      'Bangalore IND',
      'Juspay',
      '20-26lpa',
      '30 Aug 2023',
      ['Python', 'Django', 'JS', 'SQL', 'MongoDB', 'Express', 'AWS'],
      '10',
      new Date().toLocaleString(),
      []
    ),
  ];