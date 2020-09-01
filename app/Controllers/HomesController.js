import { ProxyState } from "../AppState.js";
import homesService from "../Services/HomesService.js";

function _drawHomes(){
  let homes = ProxyState.homes
  let htemplate = ''
  homes.forEach(h => htemplate += h.Template)
  document.getElementById('homeData').innerHTML = htemplate
}

export default class HomesController {
  constructor(){
    ProxyState.on('homes', _drawHomes)
    this.getHomes();
  }
  getHomes(){
    try{
      homesService.getHomes();
    }
    catch (error){
      console.error(error)
    }
  }

  createHome(){
    event.preventDefault()
    let data = event.target
    let nHome = {
      bathrooms: data.bath.value,
      bedrooms: data.bed.value,
      description: data.description.value,
      imgUrl: data.img.value,
      price: data.price.value,
      year: data.year.value,
      levels: data.levels.value
    }
  try {
    homesService.createHome(nHome)
  } catch (error){
    console.error(error)
  }
  }


  removeHome(id){
    try {
      homesService.removeHome(id)
    }catch (error){console.error(error)}
  }
}