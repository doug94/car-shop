import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  public registerCar = async (req: Request, res: Response) => {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const incomingCar: ICar = {
      model, year, color, status, buyValue, doorsQty, seatsQty,
    };
    const registeredCar = await this.service.insertCar(incomingCar);
    return res.status(201).json(registeredCar);
  };
}