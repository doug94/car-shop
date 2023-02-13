import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { model, year, color, buyValue, doorsQty, seatsQty } = car;
    if (car.id) this.id = car.id;
    if (car.status !== undefined) this.status = car.status;
    else this.status = false;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
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

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
}