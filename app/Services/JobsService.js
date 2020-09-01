//import
import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

//pub


//class service
    class JobsService{

//async get
async getJobs(){
  let obj = await api.get('jobs')
  console.log(obj)
  ProxyState.jobs = obj.data.data.map(j => new Job(j))
  console.log(ProxyState.jobs)
}
//async remove

//async create
    }
//const
const SERVICE = new JobsService()
//export
export default SERVICE