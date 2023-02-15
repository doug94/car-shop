import IVehicle from './IVehicle';

export type TCategory = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVehicle{
  category: TCategory
  engineCapacity: number
}