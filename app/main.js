import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";
import HomesController from "./Controllers/HomesController.js";

class App {
  carsController = new CarsController();
  jobsController = new JobsController();
  homesController = new HomesController();
}

window["app"] = new App();
