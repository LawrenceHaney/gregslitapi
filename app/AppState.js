import Car from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Job from "./Models/Car.js"
import Home from "./Models/Home.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = []
  
  /**@type {Job[]} */
  jobs = []

  /**@type {Home[]}*/
  homes = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
