import express from 'express';
import CarController from './Controllers/CarController';
import validateId from './middlewares/idValidation';

const app = express();

app.use(express.json());

const carController = new CarController();

app.post('/cars', carController.registerCar);

app.get('/cars', carController.retrieveAllCars);

app.get('/cars/:id', validateId, carController.retrieveCarById);

export default app;
