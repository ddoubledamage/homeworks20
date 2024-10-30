import { Magician } from '../Magican';

const magician = new Magician();

test('normal attack power', () => {
    magician.attack = 2;
    expect(magician.attack).toBe(9);
});

test('attack power with interference', () => {
    magician.stoned = true;
    magician.attack = 2;
    expect(magician.attack).toBe(4);
});

test('the presence of stoned', () => {
    expect(magician.stoned).toBe(true);
});