import Damage from './Math';

export class Magician extends Damage {
    constructor() {
        super();
        this._attack = 10;
        this.defence = 40;
    }
}