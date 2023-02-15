import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    super({ id, model, year, color, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;    
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
}