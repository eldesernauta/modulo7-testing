const rewire = require('rewire')
const app = rewire('../src/calculateTravelTime.js')

const calculateTravelTime = app.__get__('calculateTravelTime')

describe('calculateTravelTime', () => {
  test('Arroja el tiempo de viaje en Avión', () => {
    expect(calculateTravelTime('Madrid', 'Barcelona', 'plane')).toEqual(1.25);
  });

  test('Arroja el tiempo de viaje en Tren', () => {
    expect(calculateTravelTime('Madrid', 'Barcelona', 'train')).toBe(8.333333333333334);
  });

  test('Arroja el tiempo de viaje en Carro', () => {
    expect(calculateTravelTime('Madrid', 'Barcelona', 'car')).toBeCloseTo(16.67);
  });

  test('Arroja un error cuando se utiliza un medio de transporte erróneo', () => {
    expect(() => exported('Madrid', 'Barcelona', 'bike')).toThrow();
  });

});