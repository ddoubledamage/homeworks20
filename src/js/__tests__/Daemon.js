import { Daemon } from '../Daemons';

const daemon = new Daemon();

test('creating a class Daemon', () => {
    const expected = {
        _attack: 10,
        _stoned: false,
        defence: 40,
    };
    expect(daemon).toEqual(expected);
});