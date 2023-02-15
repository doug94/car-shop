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

  public retrieveAllMotorcycles = async (_req: Request, res: Response) => {
    const bikes = await this.service.getAllBikes();
    return res.status(200).json(bikes);
  };

  public retrieveMotorcycleById = async (req: Request, res: Response) => {
    const bike = await this.service.getBikeById(req.params.id);
    if (bike) return res.status(200).json(bike);
    return res.status(404).json({ message: 'Motorcycle not found' });
  };
}