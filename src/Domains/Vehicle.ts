import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    const { model, year, color, buyValue } = vehicle;
    if (vehicle.id) this.id = vehicle.id;
    if (vehicle.status !== undefined) this.status = vehicle.status;
    else this.status = false;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
  }

  public getId(): string | undefined { 
    return this.id;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getColor(): string {
    return this.color;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }  
}