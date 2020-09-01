//import
import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

//pub


//class service
class JobsService{
  async createJob(nJob) {
    //async create
        let obj = await api.post('jobs', nJob)
  let job = new Job(obj.data.data)
  
  ProxyState.jobs = [...ProxyState.jobs, job]
}

//async get
async getJobs(){
  let obj = await api.get('jobs')
  console.log(obj)
  ProxyState.jobs = obj.data.data.map(j => new Job(j))
  console.log(ProxyState.jobs)
}
//async remove
async removeJob(id) {
  await api.delete(`jobs/${id}`)
  ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)


}

    }
//const
const SERVICE = new JobsService()
//export
export default SERVICE