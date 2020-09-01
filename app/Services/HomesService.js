import { ProxyState } from "../AppState.js";
import Home from "../Models/Home.js"
import {api} from "./AxiosService.js"

class HomesService {
  async getHomes(){
    let obj = await api.get('houses')
    console.log(obj)
    ProxyState.homes = obj.data.data.map(h => new Home(h))
  }
  async createHome(nHome) {
    let obj = await api.post('houses',nHome)
    let home = new Home(obj.data.data)
    ProxyState.homes = [...ProxyState.homes, home]
  }
  async removeHome(id) {
    await api.delete(`houses/${id}`)
    ProxyState.homes = ProxyState.homes.filter(h => h.id !== id)
  }
}

const SERVICE = new HomesService();

export default SERVICE;