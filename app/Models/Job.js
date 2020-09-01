//export
export default class Job {
  //constrotor w def
constructor({_id, company, description, hours, jobTitle, rate, }){
  this.id =  _id
  this.company = company
  this.description = description
  this.hours = hours
  this.jobTitle = jobTitle
  this.rate = rate
}

//templating
get Template(){
  return `
  <div class="card col-4 bg-seconday text-center">
  <h3 class="card-title">${this.jobTitle}</h3>
  <h6>${this.company}</h6>
  <p class="text-subtle">${this.description}</p>
  <i class="fa fa-trash" aria-hidden="true" onclick="app.jobsController.removeJob('${this.id}')"></i>
  </div>
  `
}
}






