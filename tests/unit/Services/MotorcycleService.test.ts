import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { bikesMock, bikesMockWIthId } from '../../mocks/bikesMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import updatedBikeMock from '../../mocks/updatedBikeMock';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Teste unitário de MotorcycleService', function () {
  const service = new MotorcycleService();

  afterEach(function () {
    sinon.restore();
  });

  it('Deve retornar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(bikesMockWIthId);
    const retrievedBikes = await service.getAllBikes();
    expect(retrievedBikes).to.be.deep.equal(bikesMockWIthId);
  });

  it('Deve retornar a moto correspondente ao id passado por parâmetro', async function () {
    sinon.stub(Model, 'findById').resolves(bikesMockWIthId[0]);
    const bike = await service.getBikeById('634852326b35b59438fbea2f');
    expect(bike).to.be.deep.equal(bikesMockWIthId[0]);
  });

  it(`Deve receber um objeto IMotorcycle, cadastrar uma moto no banco de dados
    e devolver um objeto Motorcycle com id`, async function () {
    sinon.stub(Model, 'create').resolves(bikesMockWIthId[0]);
    const newBike = await service.insertMotorcycle(bikesMock[0]);
    expect(newBike).to.be.instanceOf(Motorcycle);
    expect(newBike).to.be.deep.equal(bikesMockWIthId[0]);
  });

  it(`Deve receber um id e um objeto IMotorcycle, atualizar o banco de dados
    com as informações do objeto para aquele id e devolver o objeto atualizado`, async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedBikeMock);
    const incomingBike: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'White',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const bikeId = '634852326b35b59438fbea2f';
    const updatedBike = await service.updateMotorcycle(bikeId, incomingBike);
    expect(updatedBike).to.be.instanceOf(Motorcycle);
    expect(updatedBike).to.be.deep.equal(updatedBikeMock);
  });
});