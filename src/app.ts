import express from 'express';
import CarController from './Controllers/CarController';

const app = express();

app.use(express.json());

const carController = new CarController();

app.post('/cars', carController.registerCar);

// app.get('/cars', (req, res) => { message: 'Oi' });

export default app;
