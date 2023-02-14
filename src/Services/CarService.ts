import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async insertCar(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const retrievedCars = await this.carODM.getCars();
    const cars = retrievedCars.map((car) => this.createCarDomain(car));
    return cars;
  }

  public async getCarById(id: string) {
    const car = await this.carODM.getCarById(id);
    return this.createCarDomain(car);
  }
}