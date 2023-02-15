import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';
import validateId from './middlewares/idValidation';

const app = express();

app.use(express.json());

const carController = new CarController();
const bikeController = new MotorcycleController();

app.post('/cars', carController.registerCar);

app.get('/cars', carController.retrieveAllCars);

app.get('/cars/:id', validateId, carController.retrieveCarById);

app.put('/cars/:id', validateId, carController.editCar);

app.post('/motorcycles', bikeController.registerMotorcycle);

app.get('/motorcycles', bikeController.retrieveAllMotorcycles);

app.get('/motorcycles/:id', validateId, bikeController.retrieveMotorcycleById);

app.put('/motorcycles/:id', validateId, bikeController.editMotorcycle);

export default app;
