import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carsMockWithId, carsMock } from '../../mocks/carsMock';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Teste unitário de CarService', function () {
  const service = new CarService();

  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar todos os carros com a função getAllCars', async function () {
    sinon.stub(Model, 'find').resolves(carsMockWithId);
    const retrievedCars = await service.getAllCars();
    expect(retrievedCars).to.be.deep.equal(carsMockWithId);
  });

  it('Deve retornar o carro correspondente ao id passado por parâmetro', async function () {
    sinon.stub(Model, 'findById').resolves(carsMockWithId[0]);
    const car = await service.getCarById('634852326b35b59438fbea2f');
    expect(car).to.be.deep.equal(carsMockWithId[0]);
  });

  it(`Deve receber um objeto ICar, cadastrar um carro no banco de dados
      e devolver um objeto Car com id`, async function () {
    sinon.stub(Model, 'create').resolves(carsMockWithId[0]);
    const newCar = await service.insertCar(carsMock[0]);
    expect(newCar).to.be.instanceOf(Car);
    expect(newCar).to.be.deep.equal(carsMockWithId[0]);
  });
});