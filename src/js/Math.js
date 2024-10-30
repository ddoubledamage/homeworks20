export default class Damage {
    constructor() {
        this._stoned = false;
    }
    set stoned(value) {
        this._stoned = value;
    }
    get stoned() {
        return this._stoned;
    }

    set attack(distance) {
        if(this._stoned) {
            this._attack = Math.round(this._attack - Math.log2(distance) * 5);
            return;
        }
        this._attack = this._attack * (1 - (distance - 1) * 0.1);
    }

    get attack() {
        return this._attack;
    }
}