import IMotorcycle, { TCategory } from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: TCategory;
  private engineCapacity: number;

  constructor(bike: IMotorcycle) {
    const { id, model, year, color, status, buyValue, category, engineCapacity } = bike;
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getCategory(): TCategory {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
}