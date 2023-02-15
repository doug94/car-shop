import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private bikeODM: MotorcycleODM;

  constructor() {
    this.bikeODM = new MotorcycleODM();
  }

  private createMotorcycleDomain(bike: IMotorcycle | null): Motorcycle | null {
    if (bike) return new Motorcycle(bike);
    return null;
  }

  public async insertMotorcycle(bike: IMotorcycle) {
    const newBike = await this.bikeODM.create(bike);
    return this.createMotorcycleDomain(newBike);
  }

  public async getAllBikes() {
    const retrievedBikes = await this.bikeODM.getBikes();
    const bikes = retrievedBikes.map((bike) => this.createMotorcycleDomain(bike));
    return bikes;
  }

  public async getBikeById(id: string) {
    const bike = await this.bikeODM.getBikeById(id);
    return this.createMotorcycleDomain(bike);
  }
}