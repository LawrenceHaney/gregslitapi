// import
import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";
//draw
function _drawJobs() {
  let jobs= ProxyState.jobs
  let jtemp = ''
  jobs.forEach(j => jtemp += j.Template)
  document.getElementById('jobData').innerHTML =  jtemp
}
//pub assests

//export
export default class JobsController {
  constructor(){
    ProxyState.on('jobs', _drawJobs)

    this.getJobs()
  }

//get
getJobs(){
  try {
    jobsService.getJobs();
  } catch (error) {
    console.error(error)
  }
  }
  
  //create
  createJob(){
    debugger
    event.preventDefault();
    let data = event.target
    let nJob = {
      company: data.company.value,
      description: data.description.value,
      hours: data.hours.value,
      jobTitle: data.jobTitle.value,
      rate: data.rate.value
    }
  try {
    jobsService.createJob(nJob)
  } catch (error) {
    console.error(error)
  }
  }

  //remove
  removeJob(id){
    try{
      jobsService.removeJob(id)
    }
    catch (error) {
      console.error(error)
    }
  }
}
  
  