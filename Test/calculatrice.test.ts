import { Calculatrice } from '../Service/calculatrice';

describe('Calculatrice', () => {
  let calc: Calculatrice;

  beforeEach(() => {
    calc = new Calculatrice();
  });

  test('additionner 1 et 2 doit retourner 3', () => {
    expect(calc.addition(1, 2)).toBe(3);
  });

  test('soustraire 2 de 5 doit retourner 3', () => {
    expect(calc.soustraction(5, 2)).toBe(3);
  });

});
