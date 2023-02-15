import ICar from '../../src/Interfaces/ICar';

export const carsMock: ICar[] = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carsMockWithId: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea2f',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const updatedCarMock: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 18.990,
  doorsQty: 4,
  seatsQty: 5,
};