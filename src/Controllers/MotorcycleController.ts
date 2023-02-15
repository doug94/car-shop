import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }

  public registerMotorcycle = async (req: Request, res: Response) => {
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const incomingBike: IMotorcycle = {
      model, year, color, status, buyValue, category, engineCapacity,
    };
    const registeredBike = await this.service.insertMotorcycle(incomingBike);
    return res.status(201).json(registeredBike);
  };
}