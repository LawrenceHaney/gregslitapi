export default class Home{
  constructor({bathrooms, bedrooms, description, imgUrl, price, year,_id, levels }){
    this.bath = bathrooms
    this.bed = bedrooms
    this.description = description
    this.img = imgUrl
    this.price = price
    this.year = year
    this.id = _id
    this.levels = levels
  }

  get Template() {
    return `<div class="card col-3 m-1">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.year} - $${this.price}</h5>
      <p class="card-text">Bedrooms: ${this.bed} - Bathrooms: ${this.bath}</p>
      <p class="card-text"><small class="text-muted">${this.description}</small></p>
      <i class="fa fa-trash" aria-hidden="true" onclick="app.homesController.removeHome('${this.id}')"></i>
    </div>
</div>

    `
  }
}